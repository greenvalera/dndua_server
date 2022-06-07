import {Args, Mutation, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import {Page} from "./models/page.model";
import {PagesService} from "./pages.service";

@Resolver(() => Page)
export class PagesResolver {
  constructor(
    private pagesService: PagesService
  ) {}

  @Query(() => [Page])
  async pages(): Promise<Page[]> {
    return await this.pagesService.findAll();
  }

  @ResolveField()
  content(@Parent() page: Page): string {
    return this.pagesService.getTextByPage(page);
  }

  @Mutation(() => Page)
  async createPage(@Args('content') content: string): Promise<Page> {
    return await this.pagesService.create({content});
  }
}
