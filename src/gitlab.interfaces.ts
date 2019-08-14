import { ModuleMetadata } from '@nestjs/common/interfaces';
import { Gitlab, GroupsBundle, ProjectsBundle, UsersBundle } from 'gitlab';
import { BaseServiceOptions } from 'gitlab/dist/infrastructure';

export enum BundleType {
  Groups = 'GroupsBundle',
  Users = 'UsersBundle',
  Projects = 'ProjectsBundle',
}

const groupsBundle = new GroupsBundle();
export type GroupsBundleRef = typeof groupsBundle;

const usersBundle = new UsersBundle();
export type UsersBundleRef = typeof usersBundle;

const projectsBundle = new ProjectsBundle();
export type ProjectsBundleRef = typeof projectsBundle;

const gitlab = new Gitlab();
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
