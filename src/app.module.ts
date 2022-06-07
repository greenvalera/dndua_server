import * as path from 'path';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from "@nestjs/config";
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { PagesModule } from './pages/pages.module';
import { GraphQLModule } from '@nestjs/graphql';
import {ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import {DatabaseModule} from "./database/database.module";
import { RacesModule } from './races/races.module';
import { InitModule } from './init/init.module';
import { ClassesModule } from './classes/classes.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
      ConfigModule.forRoot({
          envFilePath: `.${process.env.NODE_ENV}.env`
      }),
      GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
      }),
      ServeStaticModule.forRoot({
        rootPath: path.resolve(__dirname, 'static'),
      }),
      DatabaseModule,
      FilesModule,
      PagesModule,
      RacesModule,
      InitModule,
      ClassesModule,
  ],
})
export class AppModule {}
