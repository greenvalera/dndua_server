import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Field, ID} from "@nestjs/graphql";
import {Spell} from "./spell.model";
import {Class} from "../../classes/models/class.model";

@Table({tableName: 'spells_classes', createdAt: false, updatedAt: false})
export class SpellsClasses extends Model<SpellsClasses> {
  @Field(() => ID)
  @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
  id: number

  @ForeignKey(() => Spell)
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  spellId: string

  @ForeignKey(() => Class)
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  classId: string
}