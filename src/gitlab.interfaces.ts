import { ModuleMetadata } from '@nestjs/common/interfaces';
import { BaseServiceOptions, Mapper } from 'gitlab/dist/infrastructure';
import * as APIServices from 'gitlab/dist/services';

export enum BundleType {
  Groups = 'GroupsBundle',
  Users = 'UsersBundle',
  Projects = 'ProjectsBundle',
}

export type GroupsBundleRef = Mapper<{
  Groups: typeof APIServices.Groups;
  GroupAccessRequests: typeof APIServices.GroupAccessRequests;
  GroupBadges: typeof APIServices.GroupBadges;
  GroupCustomAttributes: typeof APIServices.GroupCustomAttributes;
  GroupIssueBoards: typeof APIServices.GroupIssueBoards;
  GroupMembers: typeof APIServices.GroupMembers;
  GroupMilestones: typeof APIServices.GroupMilestones;
  GroupProjects: typeof APIServices.GroupProjects;
  GroupVariables: typeof APIServices.GroupVariables;
  Epics: typeof APIServices.Epics;
  EpicIssues: typeof APIServices.EpicIssues;
  EpicNotes: typeof APIServices.EpicNotes;
  EpicDiscussions: typeof APIServices.EpicDiscussions;
}, 'Groups' | 'GroupAccessRequests' | 'GroupBadges' | 'GroupCustomAttributes' | 'GroupIssueBoards'
  | 'GroupMembers' | 'GroupMilestones' | 'GroupProjects' | 'GroupVariables' | 'Epics' | 'EpicIssues'
  | 'EpicNotes' | 'EpicDiscussions'>;

export type UsersBundleRef = Mapper<{
  Users: typeof APIServices.Users;
  UserCustomAttributes: typeof APIServices.UserCustomAttributes;
  UserEmails: typeof APIServices.UserEmails;
  UserImpersonationTokens: typeof APIServices.UserImpersonationTokens;
  UserKeys: typeof APIServices.UserKeys;
  UserGPGKeys: typeof APIServices.UserGPGKeys;
}, 'Users' | 'UserCustomAttributes' | 'UserEmails' | 'UserImpersonationTokens'
  | 'UserKeys' | 'UserGPGKeys'>;

export type ProjectsBundleRef = Mapper<{
  Branches: typeof APIServices.Branches;
  Commits: typeof APIServices.Commits;
  CommitDiscussions: typeof APIServices.CommitDiscussions;
  ContainerRegistry: typeof APIServices.ContainerRegistry;
  DeployKeys: typeof APIServices.DeployKeys;
  Deployments: typeof APIServices.Deployments;
  Environments: typeof APIServices.Environments;
  Issues: typeof APIServices.Issues;
  IssueAwardEmojis: typeof APIServices.IssueAwardEmojis;
  IssueNotes: typeof APIServices.IssueNotes;
  IssueDiscussions: typeof APIServices.IssueDiscussions;
  Jobs: typeof APIServices.Jobs;
  Labels: typeof APIServices.Labels;
  MergeRequests: typeof APIServices.MergeRequests;
  MergeRequestAwardEmojis: typeof APIServices.MergeRequestAwardEmojis;
  MergeRequestDiscussions: typeof APIServices.MergeRequestDiscussions;
  MergeRequestNotes: typeof APIServices.MergeRequestNotes;
  Pipelines: typeof APIServices.Pipelines;
  PipelineSchedules: typeof APIServices.PipelineSchedules;
  PipelineScheduleVariables: typeof APIServices.PipelineScheduleVariables;
  Projects: typeof APIServices.Projects;
  ProjectAccessRequests: typeof APIServices.ProjectAccessRequests;
  ProjectBadges: typeof APIServices.ProjectBadges;
  ProjectCustomAttributes: typeof APIServices.ProjectCustomAttributes;
  ProjectImportExport: typeof APIServices.ProjectImportExport;
  ProjectIssueBoards: typeof APIServices.ProjectIssueBoards;
  ProjectHooks: typeof APIServices.ProjectHooks;
  ProjectMembers: typeof APIServices.ProjectMembers;
  ProjectMilestones: typeof APIServices.ProjectMilestones;
  ProjectSnippets: typeof APIServices.ProjectSnippets;
  ProjectSnippetNotes: typeof APIServices.ProjectSnippetNotes;
  ProjectSnippetDiscussions: typeof APIServices.ProjectSnippetDiscussions;
  ProjectSnippetAwardEmojis: typeof APIServices.ProjectSnippetAwardEmojis;
  ProtectedBranches: typeof APIServices.ProtectedBranches;
  ProtectedTags: typeof APIServices.ProtectedTags;
  ProjectVariables: typeof APIServices.ProjectVariables;
  Releases: typeof APIServices.Releases;
  ReleaseLinks: typeof APIServices.ReleaseLinks;
  Repositories: typeof APIServices.Repositories;
  RepositoryFiles: typeof APIServices.RepositoryFiles;
  Runners: typeof APIServices.Runners;
  Services: typeof APIServices.Services;
  Tags: typeof APIServices.Tags;
  Triggers: typeof APIServices.Triggers;
}, 'Branches' | 'Commits' | 'CommitDiscussions' | 'ContainerRegistry' | 'DeployKeys' | 'Deployments'
  | 'Environments' | 'Issues' | 'IssueAwardEmojis' | 'IssueNotes' | 'IssueDiscussions' | 'Jobs' | 'Labels'
  | 'MergeRequests' | 'MergeRequestAwardEmojis' | 'MergeRequestDiscussions' | 'MergeRequestNotes'
  | 'Pipelines' | 'PipelineSchedules' | 'PipelineScheduleVariables' | 'Projects' | 'ProjectAccessRequests'
  | 'ProjectBadges' | 'ProjectCustomAttributes' | 'ProjectImportExport' | 'ProjectIssueBoards'
  | 'ProjectHooks' | 'ProjectMembers' | 'ProjectMilestones' | 'ProjectSnippets' | 'ProjectSnippetNotes'
  | 'ProjectSnippetDiscussions' | 'ProjectSnippetAwardEmojis' | 'ProtectedBranches' | 'ProtectedTags'
  | 'ProjectVariables' | 'Releases' | 'ReleaseLinks' | 'Repositories' | 'RepositoryFiles' | 'Runners'
  | 'Services' | 'Tags' | 'Triggers'>;

export type GitlabInstance = Mapper<typeof APIServices, 'Groups' | 'GroupAccessRequests' | 'GroupBadges'
  | 'GroupCustomAttributes' | 'GroupIssueBoards' | 'GroupMembers' | 'GroupMilestones' | 'GroupProjects'
  | 'GroupVariables' | 'Epics' | 'EpicIssues' | 'EpicNotes' | 'EpicDiscussions' | 'Users'
  | 'UserCustomAttributes' | 'UserEmails' | 'UserImpersonationTokens' | 'UserKeys' | 'UserGPGKeys'
  | 'Branches' | 'Commits' | 'CommitDiscussions' | 'ContainerRegistry' | 'DeployKeys' | 'Deployments'
  | 'Environments' | 'Issues' | 'IssueAwardEmojis' | 'IssueNotes' | 'IssueDiscussions' | 'Jobs' | 'Labels'
  | 'MergeRequests' | 'MergeRequestAwardEmojis' | 'MergeRequestDiscussions' | 'MergeRequestNotes'
  | 'Pipelines' | 'PipelineSchedules' | 'PipelineScheduleVariables' | 'Projects' | 'ProjectAccessRequests'
  | 'ProjectBadges' | 'ProjectCustomAttributes' | 'ProjectImportExport' | 'ProjectIssueBoards'
  | 'ProjectHooks' | 'ProjectMembers' | 'ProjectMilestones' | 'ProjectSnippets' | 'ProjectSnippetNotes'
  | 'ProjectSnippetDiscussions' | 'ProjectSnippetAwardEmojis' | 'ProtectedBranches' | 'ProtectedTags'
  | 'ProjectVariables' | 'Releases' | 'ReleaseLinks' | 'Repositories' | 'RepositoryFiles' | 'Runners'
  | 'Services' | 'Tags' | 'Triggers' | 'Todos' | 'PushRule' | 'ApplicationSettings' | 'BroadcastMessages'
  | 'Events' | 'FeatureFlags' | 'GeoNodes' | 'GitignoreTemplates' | 'GitLabCIYMLTemplates' | 'Keys'
  | 'Licence' | 'LicenceTemplates' | 'Lint' | 'Namespaces' | 'NotificationSettings' | 'Markdown'
  | 'PagesDomains' | 'Search' | 'SidekiqMetrics' | 'Snippets' | 'SystemHooks' | 'Version' | 'Wikis'>;

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
