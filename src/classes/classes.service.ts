import {Inject, Injectable} from '@nestjs/common';
import {Race} from "../races/models/race.model";
import {CreateRaceAttrs} from "../races/interfaces";
import {Class} from "./models/class.model";

@Injectable()
export class ClassesService {
  constructor(
    @Inject('CLASSES_REPOSITORY')
    private classesRepository: typeof Class
  ) {}

  async findAll(): Promise<Race[]> {
    return await this.classesRepository.findAll({include: 'page'});
  }

  async findById(id: string): Promise<Race> {
    return await this.classesRepository.findByPk(id, {include: 'page'});
  }

  async create(dto: CreateRaceAttrs): Promise<Race> {
    return await this.classesRepository.create(dto);
  }
}
