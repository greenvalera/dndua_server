import {Inject, Injectable} from '@nestjs/common';
import {Class} from "./models/class.model";
import {CreateClassAttrs} from "./interfaces";

@Injectable()
export class ClassesService {
  constructor(
    @Inject('CLASSES_REPOSITORY')
    private classesRepository: typeof Class
  ) {}

  async findAll(): Promise<Class[]> {
    return await this.classesRepository.findAll({include: 'page'});
  }

  async findById(id: string): Promise<Class> {
    return await this.classesRepository.findByPk(id, {include: 'page'});
  }

  async create(dto: CreateClassAttrs): Promise<Class> {
    return await this.classesRepository.create(dto);
  }
}
