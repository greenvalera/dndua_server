import { Field, ID, ObjectType } from '@nestjs/graphql';
import {Column, DataType, Table, Model, ForeignKey, BelongsTo} from "sequelize-typescript";
import { CreateClassAttrs } from '../interfaces';
import {Page} from "../../pages/models/page.model";


@ObjectType({description: 'class'})
@Table({tableName: "classes"})
export class Class extends Model<Class, CreateClassAttrs> {
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