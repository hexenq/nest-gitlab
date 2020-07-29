<p align="center">
  <a href="http://nestjs.com"><img src="https://nestjs.com/img/logo_text.svg" alt="Nest Logo" width="320" /></a>
</p>

<p align="center">
  A <a href="https://github.com/jdalrymple/gitbeaker">gitbeaker</a> wrapper for <a href="https://github.com/nestjs/nest">NestJS</a> framework.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/nest-gitlab"><img src="https://img.shields.io/npm/v/nest-gitlab.svg" alt="NPM Version" /></a>
  <a href="https://travis-ci.org/hexenq/nest-gitlab"><img src="https://travis-ci.org/hexenq/nest-gitlab.svg?branch=master" alt="Travis build" /></a>
  <a href="https://www.npmjs.com/package/nest-gitlab"><img src="https://img.shields.io/npm/l/nest-gitlab.svg" alt="Package License" /></a>
</p>

## Description
Gitlab API library module for <a href="https://github.com/nestjs/nest">Nest</a>.

## Installation

```bash
npm install --save nest-gitlab @gitbeaker/node
```

## Quick Start

Import `GitlabModule` and configure it with the same initiating options as the gitbeaker package.

```ts
import { GitlabModule } from 'nest-gitlab';

@Module({
  imports: [
    GitlabModule.forRoot({
      // options
    }),
  ],
})
export class AppModule {}
```

Afterward, the gitlab instance will be ready to be injected across the entire project using the `gitlab` injection token.

```ts
import { Controller, Inject } from '@nestjs/common';
import { GitlabInstance } from 'nest-gitlab';

@Controller('cats')
export class CatsController {
  constructor(@Inject('gitlab') private readonly gitlab: GitlabInstance) { }
}
```

You could also use the `InjectGitlabInstance` decorator to inject gitlab instance.

```ts
import { Controller, Inject } from '@nestjs/common';
import { GitlabInstance, InjectGitlabInstance } from 'nest-gitlab';

@Controller('cats')
export class CatsController {
  constructor(@InjectGitlabInstance() private readonly gitlab: GitlabInstance) { }

  @Get('/projects')
  public async getProjects() {
    return await this.gitlab.Projects.all();
  }
}
```

## Async Configuration

You might want to asynchronously pass your module options. In such case, use the `forRootAsync()` method. The option object could be returned by `useFactory` method:

```ts
import { Module } from '@nestjs/common';
import { GitlabModule } from 'nest-gitlab';

@Module({
  imports: [
    GitlabModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => {
        // return options
      },
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
```

## Bundle Support
gitbeaker provides [bundle](https://github.com/jdalrymple/gitbeaker#bundle-imports) feature which is a export for importing and instantiating all related API's of a specific resource at once. In order to use this feature, you could use the `InjectBundleRef` decorator combined with `forFeature` method:

```ts
import { GitlabModule } from 'nest-gitlab';

@Module({
  imports: [
    GitlabModule.forRoot({
      // options
    }),
  ],
})
export class AppModule {}
```
```ts
import { Module } from '@nestjs/common';
import { BundleType, GitlabModule } from 'nest-gitlab';

@Module({
  imports: [
    GitlabModule.forFeature([BundleType.Projects]),
  ],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
```
`BundleType` could be `Projects`, `Users`, or `Groups`.
```ts
import { Controller, Inject } from '@nestjs/common';
import { BundleType, GitlabInstance, InjectBundleRef, ProjectsBundleRef } from 'nest-gitlab';

@Controller('cats')
export class CatsController {
  constructor(@InjectBundleRef(BundleType.Projects) private readonly pbr: ProjectsBundleRef) { }

  @Get('/projects')
  public async getProjects() {
    return await this.pbr.Projects.all();
  }
}
```

## Multiple GitLab Instances
In some cases, your projects may require multiple GitLab instances. This can be achieved by naming the gitlab instances:

```ts
import { Module } from '@nestjs/common';
import { GitlabModule } from 'nest-gitlab';

@Module({
  imports: [
    GitlabModule.forRootAsync({
      name: 'ins1',
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => {
        // return options
      },
      inject: [ConfigService],
    }),
    GitlabModule.forRoot({
      name: 'ins2',
      // options
    }),
  ],
})
export class AppModule {}
```
```ts
import { Module } from '@nestjs/common';
import { BundleType, GitlabModule } from 'nest-gitlab';

@Module({
  imports: [
    GitlabModule.forFeature([BundleType.Projects], 'ins1'),
  ],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
```
```ts
import { Controller, Inject } from '@nestjs/common';
import { BundleType, GitlabInstance, InjectBundleRef, InjectGitlabInstance, ProjectsBundleRef } from 'nest-gitlab';

@Controller('cats')
export class CatsController {
  constructor(@InjectBundleRef(BundleType.Projects, 'ins1') private readonly pbr1: ProjectsBundleRef,
              @InjectGitlabInstance('ins2') private readonly gitlab2: GitlabInstance) { }
}
```


## License
MIT
