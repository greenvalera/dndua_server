import {Args, Mutation, Resolver} from '@nestjs/graphql';
import {SpellsService} from "./spells.service";
import {CreateSpellDto} from "./interfaces";
import {Spell} from "./models/spell.model";
import {Query} from "@nestjs/graphql";

@Resolver(() => Spell)
export class SpellsResolver {
  constructor(
    private spellsService: SpellsService
  ) {}

  @Query(() => [Spell])
  async spellList(): Promise<Spell[]> {
    return await this.spellsService.findAll();
  }

  @Query(() => Spell)
  async spell(@Args('id', {type: () => String}) id: string): Promise<Spell> {
    return await this.spellsService.findById(id);
  }

  @Query(() => [Spell])
  async spellsByName(@Args('name', {type: () => String}) name: string): Promise<Spell[]> {
    return await this.spellsService.finsByName(name);
  }

  @Mutation(() => Spell)
  async createSpell(@Args('params', {type: () => CreateSpellDto}) params: CreateSpellDto) {
    return await this.spellsService.create(params);
  }

  @Mutation(() => Spell)
  async updateSpell(
    @Args('id', {type: () => String}) id: string,
    @Args('params', {type: () => CreateSpellDto}) params: CreateSpellDto
  ) {
    return await this.spellsService.update(id, params);
  }
}
