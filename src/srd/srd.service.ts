import * as path from 'path';
import * as fs from "fs";
import { Injectable } from '@nestjs/common';
import ClassFileParser from "./lib/ClassFileParser";
import {Class} from "./lib/Class";

const CLASSES_DIR = path.resolve(__dirname, '../', '../', 'dnd5srd', 'Documents', 'Classes');

@Injectable()
export class SrdService {
  classes: Class[] = [];

  getClasses(): Class[] {
    if (!this.classes.length) {
      const files = fs.readdirSync(CLASSES_DIR, {encoding: "utf-8"});
      this.classes = files.map((file): Class => this.parseFile(path.join(CLASSES_DIR, file)));
    }

    return this.classes;
  }

  getClass(id: string): Class {
    return this.getClasses()[id];
  }

  private parseFile(filePath: string): Class {
    const parser = new ClassFileParser(filePath);
    return parser.getClass();
  }
}
