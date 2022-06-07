import { Injectable } from '@nestjs/common';
import {RacesService} from "../races/races.service";
import races from "./data/races";
import classes from "./data/classes";
import {PagesService} from "../pages/pages.service";
import {Race} from "../races/models/race.model";
import {Class} from "../classes/models/class.model";
import {ClassesService} from "../classes/classes.service";

@Injectable()
export class InitService {
  constructor(
    private racesService: RacesService,
    private classesService: ClassesService,
    private pagesService: PagesService
  ) {}

  async initData(): Promise<boolean> {
    try {
      await this.initRaces();
      return true;
    } catch (e) {
      return false;
    }
  }

  async initRaces(): Promise<Race[]> {
    return await Promise.all(
      races.map(async (race): Promise<Race> => {
        let page = await this.pagesService.findByContent(race.path);
        if (!page) {
          page = await this.pagesService.create({content: `Races/${race.path}`});
        }

        try {
          return await this.racesService.create({id: race.id, pageId: page.id});
        } catch (e) {
          console.log(`Creation of ${race.id} is failed`);
        }
      })
    );
  }

  async deleteRaces(): Promise<Race[]> {
    return await Promise.all(races.map(async race => {
      const raceModel = await this.racesService.findById(race.id);
      await raceModel.destroy();
      await raceModel.page.destroy();
      return raceModel;
    }));
  }

  async initClasses(): Promise<Class[]> {
    return await Promise.all(
      classes.map(async (classItem): Promise<Class> => {
        let page = await this.pagesService.findByContent(classItem.path);
        if (!page) {
          page = await this.pagesService.create({content: `Classes/${classItem.path}`});
        }

        try {
          return await this.classesService.create({id: classItem.id, pageId: page.id});
        } catch (e) {
          console.log(`Creation of ${classItem.id} is failed`);
        }
      })
    );
  }

  async deleteClasses(): Promise<Class[]> {
    return await Promise.all(classes.map(async classItem => {
      const classModel = await this.classesService.findById(classItem.id);
      await classModel.destroy();
      await classModel.page.destroy();
      return classModel;
    }));
  }
}