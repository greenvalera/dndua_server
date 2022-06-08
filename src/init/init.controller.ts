import {Controller, Post} from '@nestjs/common';
import {InitService} from "./init.service";
import {Race} from "../races/models/race.model";
import {Class} from "../classes/models/class.model";

@Controller('init')
export class InitController {
  constructor(
    private initService: InitService
  ) {}

  @Post('/races')
  async races(): Promise<Race[]> {
    console.log('1');
    return await this.initService.initRaces();
  }

  @Post('/races/delete')
  async racesDelete(): Promise<Race[]> {
    return await this.initService.deleteRaces();
  }

  @Post('/classes')
  async classes(): Promise<Class[]> {
    return await this.initService.initClasses();
  }

  @Post('/classes/delete')
  async classesDelete(): Promise<Class[]> {
    return await this.initService.deleteClasses();
  }
}
