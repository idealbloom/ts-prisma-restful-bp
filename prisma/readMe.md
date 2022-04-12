# prisma DB 관리하기

참조: https://www.prisma.io/docs/

### Schema 수정을 통한 DB 기본 업데이트

1. schema.prisma 수정

```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider          = "mysql"
  url               = env("DATABASE_URL")           // .env에 변수 설정해야 합니다.
  shadowDatabaseUrl = env("SHADOW_DATABASE_URL")    // .env에 변수 설정해야 합니다.
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  pw        String
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @default(now())
}
```

2. schema 변경사항 DB 마이그레이션(적용하기)

```
$ yarn migrate // (= npx prisma migrate dev)
```

3. Prisma Client에 마이그레이션된 상태의 모델 생성

```
$ yarn generate  // (= npx prisma generate)
```

### DB 마이그레이션 롤백하기

기본적으로 prisma에서는 DB 마이그레이션 rollback(undo) 기능을 지원하지 않는다. ([참조글](https://github.com/prisma/prisma/discussions/4617)) <br>때문에 롤백을 위해서는 /migrations 디렉토리중에서 롤백하고자 하는 마이그레이션을 직접 삭제하고 reset를 해야한다.

```
// /migrations 디렉토리에서 롤백하고자 하는 마이그레이션을 삭제한후 아래 명령어 실행
$ yarn prisma migrate reset
```

reset 기능은 기존에 존재하던 테이블들을 drop 하고 /migrations 디렉토리에 존재하는 히스토리대로 다시 마이그레이션을 수행한다.

이렇게 하면 존재하던 Attribute 들이 사라질수 있기 때문에 가급적 서비스 상태의 DB를 수정하는 일은 없어야 한다.

### 두 데이터베이스 diff sql 쿼리문 추출하기

boiler-plate 구성하는중에는 리모트 서버를 생성하지 않아 직접 테스트하진 않았다. <br> 추후 업데이트 예정

```
$ yarn prisma migrate \
--preview-feature \
--from-url "mysql://idealbloom:idealbloom1@localhost:3322/myApi \
--to-url "mysql:idealbloom:idealbloom@xxx.xxx.xxx.xxx/myApi \
--script > diff.sql
```
