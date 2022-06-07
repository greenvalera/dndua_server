import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { ClassesResolver } from './classes.resolver';
import {classesProviders} from "./classes.providers";

@Module({
  providers: [
    ...classesProviders,
    ClassesService,
    ClassesResolver
  ],
  exports: [
    ClassesService
  ]
})
export class ClassesModule {}
