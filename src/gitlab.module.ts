import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { Gitlab, GroupsBundle, ProjectsBundle, UsersBundle } from '@gitbeaker/node';
import { DEFAULT_INSTANCE_NAME } from './gitlab.constants';
import { BundleType, GitlabInstance, GitlabModuleAsyncOptions, GitlabModuleOptions } from './gitlab.interfaces';
import { getBundleToken, getInstanceOptionsToken, getInstanceToken } from './gitlab.utils';

@Global()
@Module({})
export class GitlabModule {

  public static forRoot(options: GitlabModuleOptions = {}): DynamicModule {
    const providers = this.createProviders(options);

    return {
      module: GitlabModule,
      providers: providers,
      exports: providers,
    };
  }

  public static forRootAsync(options: GitlabModuleAsyncOptions): DynamicModule {
    const providers = this.createAsyncProviders(options);

    return {
      module: GitlabModule,
      imports: options.imports,
      providers: providers,
      exports: providers,
    };
  }

  public static forFeature(
    bundles: BundleType[] = [],
    instance: string = DEFAULT_INSTANCE_NAME,
  ): DynamicModule {
    const providers = this.createFeatureProviders(bundles, instance);
    return {
      module: GitlabModule,
      providers: providers,
      exports: providers,
    };
  }

  private static createFeatureProviders(
    bundles: BundleType[] = [],
    instance: string = DEFAULT_INSTANCE_NAME,
  ): Provider[] {
    const bundleRefs = (bundles || []).map(bundle => ({
      provide: getBundleToken(bundle, instance),
      useFactory: (options: GitlabModuleOptions) => {
        switch (bundle) {
          case BundleType.Groups:
            return new GroupsBundle(options);
          case BundleType.Users:
              return new UsersBundle(options);
          case BundleType.Projects:
              return new ProjectsBundle(options);
          default:
            return null;
        }
      },
      inject: [getInstanceOptionsToken(instance)],
    }));
    return [...bundleRefs];
  }

  private static createProviders(options: GitlabModuleOptions): Provider[] {
    return [
      {
        provide: getInstanceOptionsToken(options),
        useValue: options,
      },
      {
        provide: getInstanceToken(options),
        useFactory: () => new Gitlab(options),
      },
    ];
  }
  private static createAsyncProviders(options: GitlabModuleAsyncOptions): Provider[] {
    return [
      {
        provide: getInstanceOptionsToken(options),
        useFactory: options.useFactory,
        inject: options.inject || [],
      },
      {
        provide: getInstanceToken(options),
        useFactory: (gitlabModuleOptions: GitlabModuleOptions): GitlabInstance => new Gitlab(gitlabModuleOptions),
        inject: [getInstanceOptionsToken(options)],
      },
    ];
  }
}
