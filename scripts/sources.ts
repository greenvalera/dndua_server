import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { SrdService } from "../src/srd/srd.service";
import {ClassesService} from "../src/classes/classes.service";
import {SubclassesService} from "../src/classes/subclasses.service";
import getSourcesFromClasses from "./utils/getSourcesFromClasses";

const start = async () => {
  const app = await NestFactory.createApplicationContext(AppModule);

  const srdService = app.get(SrdService);
  const classesService = app.get(ClassesService);
  const subclassesService = app.get(SubclassesService);

  const classes = await srdService.getClasses();

  // save every class
  for (const classUnit of classes) {
    if (!classUnit.name) {
      continue;
    }

    const classModel = await classesService.findById(classUnit.id);

    if (!classModel) {
      throw new Error(`Model ${classUnit.id} not found`);
    }

    classModel.nameTranslated = classUnit.name;
    classModel.description = classUnit.description;
    classModel.subclassesTitleOriginal = classUnit.subclassesTitleOriginal;
    classModel.subclassesTitleTranslated = classUnit.subclassesTitleOriginal;

    //await classModel.save();

    // save every subclass
    for (const subClass of classUnit.subclasses) {
      const subclassModel = await subclassesService.findById(subClass.nameTranslated);
    }
  };

  const sources = getSourcesFromClasses(classes);


  console.log([...new Set(sources)]);

  //console.log(sources);

  await app.close();
  process.exit(0);
};

start();

