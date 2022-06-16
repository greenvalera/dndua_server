import {Spell} from "./models/spell.model";
import {SpellAttributes} from "./models/spellAttributes.model";

export const spellsProviders = [
  {
    provide: 'SPELLS_REPOSITORY',
    useValue: Spell,
  },
  {
    provide: 'SPELLS_ATTRIBUTES_REPOSITORY',
    useValue: SpellAttributes,
  },
];