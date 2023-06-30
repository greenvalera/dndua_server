import { Field, ID, ObjectType } from '@nestjs/graphql';
import {Column, DataType, Table, Model, ForeignKey, BelongsTo, BelongsToMany, HasMany} from "sequelize-typescript";
import { CreateClassAttrs } from '../interfaces';
import {Page} from "../../pages/models/page.model";
import {SpellsClasses} from "../../spells/models/spells-classes.model";
import {Spell} from "../../spells/models/spell.model";
import {Subclass} from "./subclass.model";


@ObjectType({description: 'class'})
@Table({tableName: "classes"})
export class Class extends Model<Class, CreateClassAttrs> {
  @Field(() => ID)
  @Column({type: DataType.STRING, unique: true, primaryKey: true})
  id: string

  @Field(() => String)
  @Column({type: DataType.STRING, unique: true})
  nameTranslated: string

  @Field(() => String)
  @Column({type: DataType.TEXT})
  description: string

  @Field(() => String)
  @Column({type: DataType.STRING})
  subclassesTitleOriginal: string;

  @Field(() => String)
  @Column({type: DataType.STRING, allowNull: true})
  subclassesTitleTranslated: string;

  @Field(() => Subclass)
  @HasMany(() => Subclass)
  subclasses: Subclass[]

  @Column({type: DataType.STRING, allowNull: false})
  @ForeignKey(() => Page)
  pageId: string

  @Field(() => Page)
  @BelongsTo(() => Page)
  page: Page

  @Field(() => [Spell])
  @BelongsToMany(() => Spell, () => SpellsClasses)
  spells: Spell[]
}