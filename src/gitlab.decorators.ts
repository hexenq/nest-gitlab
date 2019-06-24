
import { Inject } from '@nestjs/common';
import { DEFAULT_INSTANCE_NAME } from './gitlab.constants';
import { BundleType } from './gitlab.interfaces';
import { getBundleToken, getInstanceToken } from './gitlab.utils';

export const InjectGitlabInstance = (
  instance: string = DEFAULT_INSTANCE_NAME,
) => Inject(getInstanceToken(instance));

export const InjectBundleRef = (
  bundle: BundleType,
  instance: string = DEFAULT_INSTANCE_NAME,
) => Inject(getBundleToken(bundle, instance));
