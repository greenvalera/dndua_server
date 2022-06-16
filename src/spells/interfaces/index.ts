import {Abilities, AttackType, CastingTime, Schools, SpellDuration} from "../enums/enums";
import {Field, InputType, Int} from "@nestjs/graphql";

@InputType('CreateSpellDto')
class CreateSpellDto {
  @Field(() => String)
  name: string;
  @Field(() => String)
  enName: string;
  @Field(() => String)
  description: string;
  @Field(() => Int)
  level: number;
  @Field(() => Schools)
  school: Schools;
  @Field(() => Boolean)
  concentration: boolean;
  @Field(() => Boolean)
  ritual: boolean;
  @Field(() => CastingTime)
  castingTime: CastingTime;
  @Field(() => Boolean)
  componentVisual: boolean;
  @Field(() => Boolean)
  componentSomatic: boolean;
  @Field(() => Boolean)
  componentMaterial: boolean;
  @Field(() => AttackType)
  attackType: AttackType;
  @Field(() => SpellDuration)
  duration: SpellDuration;
  @Field(() => Abilities)
  saveRequired: Abilities;
  @Field(() => [String])
  classes: string[];
}

interface CreateSpellAttrs extends CreateSpellDto{
  id: string,
  attributesId: string
}

interface CreateSpellAttributesAttrs {
  id: string,
  level: number,
  school: Schools,
  concentration: boolean,
  ritual: boolean,
  castingTime: CastingTime,
  componentVisual: boolean,
  componentSomatic: boolean,
  componentMaterial: boolean,
  attackType: AttackType,
  duration: SpellDuration,
  saveRequired: Abilities,
}

interface SpellSearchParams {
  level: number,
  school: Schools
}

export {
  CreateSpellAttrs,
  CreateSpellDto,
  SpellSearchParams,
  CreateSpellAttributesAttrs,
}