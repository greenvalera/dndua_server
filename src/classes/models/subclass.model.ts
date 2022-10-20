import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Field, ID, ObjectType} from "@nestjs/graphql";
import {CreateSubclassAttrs} from "../interfaces";
import {Source} from "../../sources/models/source.model";
import {Class} from "./class.model";

@ObjectType({description: 'subclass'})
@Table({tableName: 'subclasses'})
export class Subclass extends Model<Subclass, CreateSubclassAttrs> {
  @Field(() => ID)
  @Column({type: DataType.STRING, unique: true, primaryKey: true})
  id: string

  @Field(() => String)
  @Column({type: DataType.STRING, unique: true})
  nameOrigin: string

  @Field(() => String)
  @Column({type: DataType.STRING, unique: true})
  nameTranslated: string

  @Field(() => String)
  @Column({type: DataType.TEXT})
  description: string

  @Column({type: DataType.STRING, allowNull: false})
  @ForeignKey(() => Class)
  classId: string

  @Field(() => Class)
  @BelongsTo(() => Class)
  class: Class

  @Column({type: DataType.STRING, allowNull: false})
  @ForeignKey(() => Source)
  sourceId: string

  @Field(() => Source)
  @BelongsTo(() => Source)
  source: Source
}
