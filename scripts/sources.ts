import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { SrdService } from "../src/srd/srd.service";

const start = async () => {
  const app = await NestFactory.createApplicationContext(AppModule);

  const srdService = app.get(SrdService);
  const classes = await srdService.getClasses();
  console.log(classes);
  await app.close();
  process.exit(0);
};

start();

