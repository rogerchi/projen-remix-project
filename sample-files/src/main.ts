import { App } from 'aws-cdk-lib';
import { RemixSite } from './stacks/remix-app';

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new RemixSite(app, 'remix-site-dev', { env: devEnv });
// new MyStack(app, 'remix-site-prod', { env: prodEnv });

app.synth();
