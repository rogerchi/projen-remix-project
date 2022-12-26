import { synthSnapshot } from 'projen/lib/util/synth';
import { RemixAwsCdkTypeScriptProject } from '../src/index';

// Examples taken from https://github.com/projen/projen/blob/main/test/awscdk/awscdk-app.test.ts

describe('synth', () => {
  let project: RemixAwsCdkTypeScriptProject;
  let files: Record<string, any>;

  beforeEach(() => {
    project = new RemixAwsCdkTypeScriptProject({
      name: 'hello',
      defaultReleaseBranch: 'main',
      cdkVersion: '2.51.1',
    });

    files = synthSnapshot(project);
  });

  it('adds a "synth" task', () => {
    expect(files['.projen/tasks.json'].tasks.synth).toStrictEqual({
      name: 'synth',
      description: 'Synthesizes your cdk app into cdk.out',
      steps: [{ exec: 'cdk synth' }],
    });
  });

  it('adds a "synth:silent" task', () => {
    expect(files['.projen/tasks.json'].tasks['synth:silent']).toStrictEqual({
      name: 'synth:silent',
      description:
        'Synthesizes your cdk app into cdk.out and suppresses the template in stdout (part of "yarn build")',
      steps: [{ exec: 'cdk synth -q' }],
    });
  });

  it('spawns a "synth:silent" post-compile task', () => {
    expect(
      files['.projen/tasks.json'].tasks['post-compile'].steps,
    ).toStrictEqual([{ spawn: 'synth:silent' }]);
  });
});

describe('deploy', () => {
  let project: RemixAwsCdkTypeScriptProject;
  let files: Record<string, any>;

  beforeEach(() => {
    project = new RemixAwsCdkTypeScriptProject({
      name: 'hello',
      defaultReleaseBranch: 'main',
      cdkVersion: '1.100.0',
    });

    files = synthSnapshot(project);
  });

  it('adds a "deploy" task', () => {
    expect(files['.projen/tasks.json'].tasks.deploy).toStrictEqual({
      name: 'deploy',
      steps: [
        {
          exec: 'npm run remix:build && cdk deploy --outputs-file cdk-outputs.json hello-dev*',
        },
      ],
    });
  });
});
