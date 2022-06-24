import {Field, ID, ObjectType} from '@nestjs/graphql';
import {Column, DataType, Table, Model, BelongsTo, ForeignKey, BelongsToMany} from "sequelize-typescript";
import { CreateSpellAttrs } from '../interfaces';
import {SpellAttributes} from "./spellAttributes.model";
import {Class} from "../../classes/models/class.model";
import {SpellsClasses} from "./spells-classes.model";

@ObjectType({description: 'spell'})
@Table({tableName: "spells", createdAt: false, updatedAt: false})
export class Spell extends Model<Spell, CreateSpellAttrs> {
  @Field(() => ID)
  @Column({type: DataType.STRING, unique: true, primaryKey: true})
  id: string

  @Field(() => String)
  @Column({type: DataType.STRING, allowNull: false})
  name: string

  @Field(() => String)
  @Column({type: DataType.STRING, allowNull: false})
  enName: string

  @Field(() => String)
  @Column({type: DataType.TEXT, allowNull: false})
  description: string

  @Column({type: DataType.STRING})
  @ForeignKey(() => SpellAttributes)
  attributesId: string

  @Field(() => SpellAttributes)
  @BelongsTo(() => SpellAttributes)
  attributes: SpellAttributes

  @Field(() => [Class])
  @BelongsToMany(() => Class, () => SpellsClasses)
  classes: Class[]
}