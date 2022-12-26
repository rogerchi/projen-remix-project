import * as path from 'path';
import { RemixApp, RemixAppProps } from '@rogerchi/cdk-remix-app';
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

type PartialRemixAppProps = Partial<RemixAppProps>;
export type RemixSiteProps = PartialRemixAppProps & StackProps;

export class RemixSite extends Stack {
  constructor(
    scope: Construct,
    id: string,
    {
      remixPath = path.join(__dirname, '../../remix'),
      cognitoAuth,
      customDomain,
      ddbSessions,
      isDev,
      ...props
    }: RemixSiteProps,
  ) {
    super(scope, id, props);

    new RemixApp(this, 'remix', {
      remixPath,
      cognitoAuth,
      customDomain,
      ddbSessions,
      isDev,
    });
  }
}
