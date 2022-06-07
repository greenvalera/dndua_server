import {Inject, Injectable} from '@nestjs/common';
import {Race} from "./models/race.model";
import {CreateRaceAttrs} from "./interfaces";

@Injectable()
export class RacesService {
  constructor(
    @Inject('RACES_REPOSITORY')
    private racesRepository: typeof Race
  ) {}

  async findAll(): Promise<Race[]> {
    return await this.racesRepository.findAll({include: 'page'});
  }

  async findById(id: string): Promise<Race> {
    return await this.racesRepository.findByPk(id, {include: 'page'});
  }

  async create(dto: CreateRaceAttrs): Promise<Race> {
    return await this.racesRepository.create(dto);
  }
}
