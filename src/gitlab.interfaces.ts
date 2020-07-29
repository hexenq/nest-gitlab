import { ModuleMetadata } from '@nestjs/common/interfaces';
import { Gitlab, GroupsBundle, ProjectsBundle, UsersBundle } from '@gitbeaker/node';
import { BaseServiceOptions } from '@gitbeaker/core/dist/types/infrastructure';

export enum BundleType {
  Groups = 'GroupsBundle',
  Users = 'UsersBundle',
  Projects = 'ProjectsBundle',
}

const option = { host: 'http://example.com', token: '123456' };

const groupsBundle = new GroupsBundle(option);
export type GroupsBundleRef = typeof groupsBundle;

const usersBundle = new UsersBundle(option);
export type UsersBundleRef = typeof usersBundle;

const projectsBundle = new ProjectsBundle(option);
export type ProjectsBundleRef = typeof projectsBundle;

const gitlab = new Gitlab(option);
export type GitlabInstance = typeof gitlab;

export type GitlabModuleOptions = {
  name?: string,
} & BaseServiceOptions;

export interface GitlabModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  name?: string;
  useFactory: (
    ...args: any[]
  ) => Promise<BaseServiceOptions> | BaseServiceOptions;
  inject?: any[];
}
