import { Module } from '@nestjs/common';
import { SpellsService } from './spells.service';
import { SpellsController } from './spells.controller';
import { SpellsResolver } from './spells.resolver';
import {spellsProviders} from "./spells.providers";

@Module({
  providers: [
    ...spellsProviders,
    SpellsService,
    SpellsResolver
  ],
  controllers: [SpellsController]
})
export class SpellsModule {}
