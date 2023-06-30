import {Class} from "./models/class.model";
import {Subclass} from "./models/subclass.model";

export const classesProviders = [
  {
    provide: 'CLASSES_REPOSITORY',
    useValue: Class,
  },
  {
    provide: 'SUBCLASSES_REPOSITORY',
    useValue: Subclass,
  },
];