import {Body, Controller, Get, Post} from '@nestjs/common';
import {SpellsService} from "./spells.service";
import {CreateSpellDto} from "./interfaces";
import {Spell} from "./models/spell.model";

@Controller('spells')
export class SpellsController {
  constructor(
    private spellsService: SpellsService
  ) {}

  @Post('/create')
  async create(@Body() dto: CreateSpellDto): Promise<Spell> {
    return await this.spellsService.create(dto);
  }

  @Get('/')
  async findAll(): Promise<Spell[]> {
    return await this.spellsService.findAll();
  }
}
