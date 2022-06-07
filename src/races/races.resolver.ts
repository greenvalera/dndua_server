import {Args, Mutation, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import {RacesService} from "./races.service";
import {Race} from "./models/race.model";
import {Page} from "../pages/models/page.model";

@Resolver(() => Race)
export class RacesResolver {
  constructor(
    private racesService: RacesService
  ) {}

  @Query(() => [Race])
  async races(): Promise<Race[]> {
    return await this.racesService.findAll();
  }

  @Query(() => Race)
  async race(@Args('id') id: string): Promise<Race> {
    return this.racesService.findById(id);
  }

  @ResolveField()
  page(@Parent() race: Race): Page {
    return race.page;
  }

  @Mutation(() => Race)
  async addRace (
    @Args('id') id: string,
    @Args('pageId') pageId: string,
    ): Promise<Race> {
      return await this.racesService.create({id, pageId});
  }
}
