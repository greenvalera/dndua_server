import { Module } from '@nestjs/common';
import { SourcesService } from './sources.service';
import {sourcesProviders} from "./sources.providers";

@Module({
  providers: [
    ...sourcesProviders,
    SourcesService
  ]
})
export class SourcesModule {}
