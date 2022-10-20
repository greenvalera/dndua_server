import {Page} from "../pages/models/page.model";
import {Source} from "../sources/models/source.model";
import {Race} from "../races/models/race.model";
import {Class} from "../classes/models/class.model";
import {Subclass} from "../classes/models/subclass.model";
import {Spell} from "../spells/models/spell.model";
import {SpellAttributes} from "../spells/models/spellAttributes.model";
import {SpellsClasses} from "../spells/models/spells-classes.model";

const models = [
  Page,
  Source,
  Race,
  Class,
  Subclass,
  Spell,
  SpellAttributes,
  SpellsClasses,
];

const getModels = () => models;

export {
  getModels
};

export default models;