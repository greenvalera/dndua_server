import { Module } from '@nestjs/common';
import { RacesService } from './races.service';
import { RacesResolver } from './races.resolver';
import {racesProviders} from "./races.providers";
import {PagesModule} from "../pages/pages.module";

@Module({
  providers: [
    RacesService,
    RacesResolver,
    ...racesProviders,
  ],
  imports: [
    PagesModule
  ],
  exports: [
    RacesService
  ]
})
export class RacesModule {}
