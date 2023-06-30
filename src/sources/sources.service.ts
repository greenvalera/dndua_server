import * as uuid from 'uuid';
import {Inject, Injectable} from '@nestjs/common';
import {Source} from "./models/source.model";
import {SourceCreateDto} from "./types";

@Injectable()
export class SourcesService {
  constructor(
    @Inject('SOURCES_REPOSITORY')
    private sourcesRepository: typeof Source,
  ) {}

  async findAll(): Promise<Source[]> {
    return await this.sourcesRepository.findAll();
  }

  async findById(id: string): Promise<Source> {
    return await this.sourcesRepository.findByPk(id);
  }

  async create(dto: SourceCreateDto): Promise<Source> {
    const id = uuid.v4();
    return await this.sourcesRepository.create({...dto, id});
  }
}
