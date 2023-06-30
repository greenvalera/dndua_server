import {Source} from "./models/source.model";

export const sourcesProviders = [
  {
    provide: 'SOURCES_REPOSITORY',
    useValue: Source,
  },
];