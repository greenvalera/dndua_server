export class Class {
  id: string;
  name: string;
  description: string;
  subclassesTitleOriginal: string;
  subclassesTitleTranslated: string;
  subclasses: Subclass[];
}

export class Subclass {
  nameOriginal: string;
  nameTranslated: string;
  description: string;
  source: string;
}