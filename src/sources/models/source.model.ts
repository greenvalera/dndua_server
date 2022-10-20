import {Column, DataType, Model, Table} from "sequelize-typescript";
import {SourceCreateAttrs} from "./interfaces";
import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType({description: "source"})
@Table({tableName: "sources"})
export class Source extends Model<Source, SourceCreateAttrs> {
  @Field(() => ID)
  @Column({type: DataType.STRING, unique: true, primaryKey: true})
  id: string

  @Field(() => String)
  @Column({type: DataType.STRING, unique: true})
  name: string

  @Field(() => String)
  @Column({type: DataType.STRING, unique: true})
  shortname: string

  @Field(() => Boolean)
  @Column({type: DataType.BOOLEAN})
  isOfficial: boolean
}