## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Migrations

```bash
# create migration
$ npx sequelize-cli migration:generate --name addClassTranslationName

# migrate
$ npx sequelize-cli db:migrate

# create seed
$ npx sequelize-cli seed:generate --name demo-user

# apply seed
$ npx sequelize-cli db:seed:all