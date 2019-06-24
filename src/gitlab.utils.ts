import { DEFAULT_INSTANCE_NAME } from './gitlab.constants';
import { BundleType, GitlabModuleOptions } from './gitlab.interfaces';

export function getInstanceToken(options: GitlabModuleOptions | string = DEFAULT_INSTANCE_NAME) {
  return DEFAULT_INSTANCE_NAME === options
  ? 'gitlab'
  : 'string' === typeof options
    ? `${options}Instance`
    : DEFAULT_INSTANCE_NAME === options.name || !options.name
      ? 'gitlab'
      : `${options.name}Instance`;
}

export function getInstanceOptionsToken(options: GitlabModuleOptions | string = DEFAULT_INSTANCE_NAME) {
  return DEFAULT_INSTANCE_NAME === options
  ? `${DEFAULT_INSTANCE_NAME}Options`
  : 'string' === typeof options
    ? `${options}Options`
    : DEFAULT_INSTANCE_NAME === options.name || !options.name
      ? `${DEFAULT_INSTANCE_NAME}Options`
      : `${options.name}Options`;
}

export function getBundleToken(bundle: BundleType, instance: string = DEFAULT_INSTANCE_NAME) {
  return `${instance}_${bundle}`;
}
