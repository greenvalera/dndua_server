import {Race} from "./models/race.model";

export const racesProviders = [
  {
    provide: 'RACES_REPOSITORY',
    useValue: Race,
  },
];