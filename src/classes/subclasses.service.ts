import * as uuid from 'uuid';
import {Inject, Injectable} from '@nestjs/common';
import {SubclassDto} from "./interfaces";
import {Subclass} from "./models/subclass.model";

@Injectable()
export class SubclassesService {
  constructor(
    @Inject('SUBCLASSES_REPOSITORY')
    private subclassesRepository: typeof Subclass,
  ) {}

  async findAll(): Promise<Subclass[]> {
    return await this.subclassesRepository.findAll();
  }

  async findById(id: string): Promise<Subclass> {
    return await this.subclassesRepository.findByPk(id);
  }

  async create(dto: SubclassDto): Promise<Subclass> {
    const id = uuid.v4();
    //Source
    return await this.subclassesRepository.create({...dto, id});
  }
}
