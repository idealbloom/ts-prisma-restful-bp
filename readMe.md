# 개요

본 boiler plate는 MySQL docker 기반의 prisma restful API 서버입니다. 현재 기준으로 기본적으로 세팅되어 있는 상태는 다음과 같습니다.

- typescript
- ts eslint (TypeScript ESLint recommanded style) + prettier
- MySQL docker-compose
- ts prisma
- ts express restful API Server (pm2)
- husky + lint-stage

# How to run

### 1. MySQL docker setting

```shell
$ docker-compose up -d
$ docker ps // 확인

CONTAINER ID   IMAGE     COMMAND                  CREATED        STATUS       PORTS                               NAMES
ce43b2497247   mysql     "docker-entrypoint.s…"   10 days ago    Up 10 days   33060/tcp, 0.0.0.0:3322->3306/tcp   ts-prisma-boilerplate_mysql_1
```

### 2. 환경 변수 및 config 파일 복사(개발자 문의 필요: hjkang@idealbloom.io)

- .env
- /config/xxx.json

.env에는 기본적으로 아래 변수들이 필요하다.<br> DATABASE_URL <br> SHADOW_DATABASE_URL

> ex) <br>DATABASE_URL="mysql://idealbloom:idealbloom1@localhost:3322/myApi?schema=public" SHADOW_DATABASE_URL="mysql://idealbloom:idealbloom1@localhost:3322/shadowdb"

### 3. 서버실행

```shell
$ yarn start default dev 모드 실행(= yarn start:dev)
```

### 4. 서버 재시작 및 중지 명령어

```shell
$ yarn restart
$ yarn stop
```

# Semantic Commit Messages Rule

See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

### Example

```
feat: add hat  wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

More Examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

References:

- https://www.conventionalcommits.org/
- https://seesparkbox.com/foundry/semantic_commit_messages
- http://karma-runner.github.io/1.0/dev/git-commit-msg.html
