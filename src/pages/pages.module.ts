import { Module } from '@nestjs/common';
import { PagesService } from './pages.service';
import { PagesResolver } from './pages.resolver';
import {pagesProviders} from "./pages.providers";

@Module({
  providers: [
    PagesService,
    PagesResolver,
    ...pagesProviders
  ],
  exports: [
    PagesService
  ]
})
export class PagesModule {}
