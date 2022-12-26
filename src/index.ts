import * as path from 'path';
import { awscdk, Component, SampleDir, SampleFile, TextFile } from 'projen';
import { AwsCdkTypeScriptAppOptions } from 'projen/lib/awscdk';
import {
  TypeScriptJsxMode,
  TypeScriptModuleResolution,
} from 'projen/lib/javascript';

export interface RemixAwsCdkTypeScriptProjectOptions
  extends AwsCdkTypeScriptAppOptions {
  /**
   * Remix version
   *
   * @default "1.9.0"
   */
  readonly remixVersion?: string;

  /**
   * AWS JavaScript SDK v3 version
   *
   * @default "3.229.0"
   */
  readonly awsSdkV3Version?: string;

  /**
   * React version
   *
   * @default "^18"
   */
  readonly reactVersion?: string;

  /**
   * React @types version
   *
   * @default "^18"
   */
  readonly reactTypesVersion?: string;

  /**
   * nvm node version
   *
   * @default "16"
   */
  readonly nvmNodeVersion?: string;

  /**
   * Enable tailwind
   *
   * @default true
   */
  readonly tailwind?: boolean;

  /**
   * Directory that remix project files should be in
   *
   * @default 'remix'
   */
  readonly remixDir?: string;
}

export class RemixAwsCdkTypeScriptProject extends awscdk.AwsCdkTypeScriptApp {
  public readonly remixDir: string;
  public readonly tailwind?: boolean;

  constructor(options: RemixAwsCdkTypeScriptProjectOptions) {
    const {
      remixVersion = '1.9.0',
      awsSdkV3Version = '3.229.0',
      reactVersion = '^18',
      reactTypesVersion = '^18',
      nvmNodeVersion = '16',
      tailwind = true,
      remixDir = 'remix',
      ...cdkOptions
    } = options;

    const remixProjectDeps = [
      `@remix-run/node@${remixVersion}`,
      `@remix-run/react@${remixVersion}`,
      `@remix-run/serve@${remixVersion}`,
      `@remix-run/architect@${remixVersion}`,
      `react@${reactVersion}`,
      `react-dom@${reactVersion}`,
      'isbot',
      `@aws-sdk/lib-dynamodb@${awsSdkV3Version}`,
      `@aws-sdk/client-dynamodb@${awsSdkV3Version}`,
      `@aws-sdk/client-apigatewaymanagementapi@${awsSdkV3Version}`,
      `@aws-sdk/client-sns@${awsSdkV3Version}`,
      `@aws-sdk/client-ssm@${awsSdkV3Version}`,
      `@aws-sdk/client-sqs@${awsSdkV3Version}`,
      `@aws-sdk/client-sts@${awsSdkV3Version}`,
      '@rogerchi/cdk-remix-app',
    ];

    const remixProjectDevDeps = [
      'esbuild',
      `@remix-run/dev@${remixVersion}`,
      `@remix-run/eslint-config@${remixVersion}`,
      `@types/react@${reactTypesVersion}`,
      `@types/react-dom@${reactTypesVersion}`,
      'npm-run-all',
      'dotenv',
    ];

    const remixTsconfig = {
      include: ['remix/**/*.ts', 'remix/remix.env.d.ts', 'remix/**/*.tsx'],
      compilerOptions: {
        rootDir: './',
        paths: { '~/*': ['./remix/app/*'] },
        jsx: TypeScriptJsxMode.REACT_JSX,
        lib: ['DOM', 'DOM.Iterable', 'ES2019'],
        skipLibCheck: true,
        moduleResolution: TypeScriptModuleResolution.NODE,
        allowJs: true,
        forceConsistentCasingInFileNames: true,
        baseUrl: '.',
        isolatedModules: true,
        noEmit: true,
      },
    };

    const remixWatchIncludes = [
      'src/**/*.ts',
      'test/**/*.ts',
      'remix/server/server.js',
      'remix/build/index.js',
    ];

    const remixWatchExcludes = [
      'README.md',
      'cdk*.json',
      '**/*.d.ts',
      './*.js',
      'src/**/*.js',
      'tsconfig.json',
      'package*.json',
      'yarn.lock',
      'node_modules',
    ];

    super({
      minNodeVersion: '14.17.0',

      ...cdkOptions,
      deps: [...remixProjectDeps, ...(cdkOptions.deps ?? [])],
      devDeps: [...remixProjectDevDeps, ...(cdkOptions.devDeps ?? [])],
      tsconfig: {
        include: [
          ...remixTsconfig.include,
          ...(cdkOptions.tsconfig?.include ?? []),
        ],
        compilerOptions: remixTsconfig.compilerOptions,
      },
      watchIncludes: [
        ...remixWatchIncludes,
        ...(cdkOptions.watchIncludes ?? []),
      ],
      watchExcludes: [
        ...remixWatchExcludes,
        ...(cdkOptions.watchExcludes ?? []),
      ],
      sampleCode: false,
    });

    this.remixDir = remixDir;
    this.tailwind = tailwind;

    this.addDeps(
      `@aws-cdk/aws-apigatewayv2-alpha@${this.cdkVersion}-alpha.0`,
      `@aws-cdk/aws-apigatewayv2-integrations-alpha@${this.cdkVersion}-alpha.0`,
    );
    new TextFile(this, '.nvmrc', {
      lines: [nvmNodeVersion],
    });

    if (options.sampleCode ?? true) {
      new SampleCode(this);
    }

    this.eslint?.addExtends(
      '@remix-run/eslint-config',
      '@remix-run/eslint-config/node',
      'plugin:import/recommended',
    );
    this.eslint?.addRules({ 'no-duplicate-imports': ['off'] });
    this.eslint?.addRules({ '@typescript-eslint/indent': ['off'] });

    this.addGitIgnore('/remix/.cache');
    this.addGitIgnore('/remix/build');
    this.addGitIgnore('/remix/public/build');
    this.addGitIgnore('cdk-outputs.json');
    this.addGitIgnore('.env');

    if (tailwind) {
      this.addGitIgnore('/remix/app/tailwind.css');
      this.addDeps('tailwindcss');
    }

    this.addTask('remix:build', {
      exec: 'npm run remix:minify:css && rm -rf remix/public/build && rm -rf remix/build && remix build',
    });
    this.addTask('remix:dev', {
      exec: 'LOCAL_DEV=true remix dev & npm run remix:watch:css',
    });

    this.addTask('remix:generate:css', {
      exec: 'tailwindcss -i ./remix/styles/tailwind.css -o ./remix/app/tailwind.css',
    });
    this.addTask('remix:minify:css', {
      exec: 'tailwindcss -i ./remix/styles/tailwind.css -o ./remix/app/tailwind.css --minify',
    });
    this.addTask('remix:watch:css', {
      exec: 'tailwindcss -i ./remix/styles/tailwind.css -o ./remix/app/tailwind.css --watch',
    });

    this.removeTask('deploy');
    this.addTask('deploy', {
      exec: `npm run remix:build && cdk deploy --outputs-file cdk-outputs.json ${this.name}-dev*`,
    });

    this.removeTask('watch');
    this.addTask('watch', {
      exec: `cdk watch ${this.name}-dev*`,
    });

    this.removeTask('hotswap');
    this.addTask('hotswap', {
      exec: `cdk deploy --hotswap ${this.name}-dev*`,
    });

    this.removeTask('build-hotswap');
    this.addTask('build-hotswap', {
      exec: `npm run remix:build && cdk hotswap ${this.name}-dev*`,
    });
  }
}

class SampleCode extends Component {
  private readonly appProject: RemixAwsCdkTypeScriptProject;

  constructor(project: RemixAwsCdkTypeScriptProject) {
    super(project);
    this.appProject = project;
  }

  public synthesize() {
    new SampleDir(this.appProject, this.appProject.remixDir, {
      sourceDir: path.join(__dirname, '..', 'sample-files', 'remix'),
    });
    new SampleFile(this.appProject, 'remix.config.js', {
      sourcePath: path.join(__dirname, '..', 'sample-files', 'remix.config.js'),
    });
    if (this.appProject.tailwind) {
      new SampleDir(this.appProject, `${this.appProject.remixDir}/styles`, {
        sourceDir: path.join(__dirname, '..', 'sample-files', 'styles'),
      });
    }
  }
}
