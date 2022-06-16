import {Inject, Injectable} from '@nestjs/common';
import {Spell} from "./models/spell.model";
import {CreateSpellAttributesAttrs, CreateSpellDto, SpellSearchParams} from "./interfaces";
import getSpellIdFromName from "./utils/getSpellIdFromName";
import {Op} from "sequelize";
import {SpellAttributes} from "./models/spellAttributes.model";
import {randomUUID} from "crypto";

@Injectable()
export class SpellsService {
  constructor(
    @Inject("SPELLS_REPOSITORY")
    private spellsRepository: typeof Spell,

    @Inject("SPELLS_ATTRIBUTES_REPOSITORY")
    private spellAttributesRepository: typeof SpellAttributes
  ) {}

  async create(dto: CreateSpellDto): Promise<Spell> {
    const attributesId = randomUUID();
    const attributes = await this.createSpellAttributes({...dto, id: attributesId});
    const spellId = getSpellIdFromName(dto.enName);
    const spell = await this.spellsRepository.create({...dto, id: spellId, attributesId: attributes.id});
    await spell.$set('classes', dto.classes);
    return spell;
  }

  async findAll(): Promise<Spell[]> {
    return await this.spellsRepository.findAll({include: ['attributes', 'classes']});
  }

  async findById(id: string): Promise<Spell> {
    return await this.spellsRepository.findByPk(id, {include: ['attributes', 'classes']});
  }

  async finsByName(name: string): Promise<Spell[]> {
    const pattern = `%${name}%`;
    return await this.spellsRepository.findAll({
      where: {[Op.or]: [{name: {[Op.like]: pattern}}, {enName: {[Op.like]: pattern}}]},
      include: ['attributes', 'classes']
    });
  }

  async findByParams(params: SpellSearchParams): Promise<Spell[]> {
    return [];
  }

  private async createSpellAttributes(dto: CreateSpellAttributesAttrs): Promise<SpellAttributes> {
    return await this.spellAttributesRepository.create(dto);
  }
}
