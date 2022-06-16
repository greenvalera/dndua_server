import {Column, DataType, Model, Table} from "sequelize-typescript";
import {Field, ID, Int, ObjectType, registerEnumType} from "@nestjs/graphql";
import {Abilities, AttackType, CastingTime, Schools, SpellDuration} from "../enums/enums";
import {CreateSpellAttributesAttrs} from "../interfaces";

registerEnumType(Schools, {
  name: 'Schools',
  description: 'Magic schools of spells',
});

registerEnumType(CastingTime, {
  name: 'CastingTime',
  description: 'Spells casting time',
})

registerEnumType(AttackType, {
  name: 'AttackType',
  description: "Spells attack type based on distance to the goal"
})

registerEnumType(SpellDuration, {
  name: 'SpellDuration',
  description: "Spells duration time"
})
registerEnumType(Abilities, {
  name: 'Abilities',
  description: "Character abilities names"
})



@ObjectType({description: 'spellAttributes'})
@Table({tableName: "spellAttributes", createdAt: false, updatedAt: false})
export class SpellAttributes extends Model<SpellAttributes, CreateSpellAttributesAttrs> {
  @Field(() => ID)
  @Column({type: DataType.STRING, unique: true, primaryKey: true})
  id: string

  @Field(() => Int)
  @Column({type: DataType.TINYINT, allowNull: false})
  level: number

  @Field(() => Schools)
  @Column({type: DataType.ENUM(...Object.keys(Schools)), allowNull: false})
  school: Schools

  @Field(() => Boolean)
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  concentration: boolean

  @Field(() => Boolean)
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  ritual: boolean

  @Field(() => CastingTime)
  @Column({type: DataType.ENUM(...Object.keys(CastingTime)), allowNull: false})
  castingTime: CastingTime

  @Field(() => Boolean)
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  componentVisual: boolean

  @Field(() => Boolean)
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  componentSomatic: boolean

  @Field(() => Boolean)
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  componentMaterial: boolean

  @Field(() => AttackType)
  @Column({type: DataType.ENUM(...Object.keys(AttackType))})
  attackType: AttackType

  @Field(() => SpellDuration)
  @Column({type: DataType.ENUM(...Object.keys(SpellDuration))})
  duration: SpellDuration

  @Field(() => Abilities)
  @Column({type: DataType.ENUM(...Object.keys(Abilities)), defaultValue: null})
  saveRequired: Abilities
}