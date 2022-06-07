import {Page} from "./models/page.model";

export const pagesProviders = [
  {
    provide: 'PAGES_REPOSITORY',
    useValue: Page,
  },
];