import {Class} from "./models/class.model";

export const classesProviders = [
  {
    provide: 'CLASSES_REPOSITORY',
    useValue: Class,
  },
];