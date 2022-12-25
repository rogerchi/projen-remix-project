import { cdk } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';
const project = new cdk.JsiiProject({
  author: 'Roger Chi',
  authorAddress: 'roger@rogerchi.com',
  defaultReleaseBranch: 'main',
  name: '@rogerchi/projen-remix-project',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/rogerchi/projen-remix-project.git',
  description:
    'Projen external project type for a Remix (https://remix.run) application',
  stability: 'experimental',
  autoApproveUpgrades: true,
  autoApproveOptions: {
    secret: 'PROJEN_GITHUB_TOKEN',
  },
  releaseToNpm: false,
  npmAccess: NpmAccess.PUBLIC,
  peerDeps: ['projen'],
  sampleCode: false,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
