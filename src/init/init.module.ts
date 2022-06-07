import { Module } from '@nestjs/common';
import { InitService } from './init.service';
import { InitController } from './init.controller';
import {RacesModule} from "../races/races.module";
import {PagesModule} from "../pages/pages.module";
import {ClassesModule} from "../classes/classes.module";

@Module({
  providers: [InitService],
  controllers: [InitController],
  imports: [RacesModule, ClassesModule, PagesModule]
})
export class InitModule {}
