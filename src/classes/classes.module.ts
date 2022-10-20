import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { ClassesResolver } from './classes.resolver';
import {classesProviders} from "./classes.providers";
import {SourcesModule} from "../sources/sources.module";
import {SrdModule} from "../srd/srd.module";

@Module({
  providers: [
    ...classesProviders,
    ClassesService,
    ClassesResolver
  ],
  exports: [
    ClassesService
  ],
  imports: [
    SrdModule,
    SourcesModule
  ]

})
export class ClassesModule {}
