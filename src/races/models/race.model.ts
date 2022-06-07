import { Field, ID, ObjectType } from '@nestjs/graphql';
import {Column, DataType, Table, Model, ForeignKey, BelongsTo} from "sequelize-typescript";
import { CreateRaceAttrs } from '../interfaces';
import {Page} from "../../pages/models/page.model";


@ObjectType({description: 'race'})
@Table({tableName: "races"})
export class Race extends Model<Race, CreateRaceAttrs> {
  @Field(() => ID)
  @Column({type: DataType.STRING, unique: true, primaryKey: true})
  id: string

  @Column({type: DataType.STRING, allowNull: false})
  @ForeignKey(() => Page)
  pageId: string

  @Field(() => Page)
  @BelongsTo(() => Page)
  page: Page
}