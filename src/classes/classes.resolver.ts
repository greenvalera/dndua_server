import {Args, Mutation, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import {ClassesService} from "./classes.service";
import {Class} from "./models/class.model";
import {Page} from "../pages/models/page.model";

@Resolver(() => Class)
export class ClassesResolver {
  constructor(
    private classesService: ClassesService
  ) {}

  @Query(() => [Class])
  async classes(): Promise<Class[]> {
    return await this.classesService.findAll();
  }

  @Query(() => Class)
  async class(@Args('id') id: string): Promise<Class> {
    return this.classesService.findById(id);
  }

  @ResolveField()
  page(@Parent() race: Class): Page {
    return race.page;
  }

  @Mutation(() => Class)
  async addRace (
    @Args('id') id: string,
    @Args('pageId') pageId: string,
    ): Promise<Class> {
      return await this.classesService.create({id, pageId});
  }
}
