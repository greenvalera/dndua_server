import * as fs from "fs";
import {Class, Subclass} from "./Class";

export default class ClassFileParser {
  private filePath: string;
  private lines: string[];
  private currentLine: string;
  private classObject: Class;

  constructor(filePath) {
    this.filePath = filePath;
    this.classObject = new Class();
  }

  public getClass(): Class {
    this.parse();
    return this.classObject;
  }

  private parse() {
    const content = fs.readFileSync(this.filePath, {encoding: "utf-8"});
    this.lines = content.split('\n');
    this.parseName();
    this.parseSubclassName();
    this.parseSubclasses();
  };

  private parseName(): void {
    while (this.lines.length) {
      this.currentLine = this.lines.shift();

      // Parsing of origin and translated names
      const nameMatches = this.currentLine.match(/^#\s(\S+)\s\((\w+)\)/)
      const nameMatchesNotTranslated =  this.currentLine.match(/^#\s(\S+)/)
      if (nameMatches) {
        this.classObject.name = nameMatches[1];
        this.classObject.id = nameMatches[2];
        this.lines.shift();
        break;
      } else if (nameMatchesNotTranslated) {
        this.classObject.name = null;
        this.classObject.id = nameMatchesNotTranslated[1];
        this.lines.shift();
        break;
      }
    }
  }

  private parseSubclassName(): void {
    const descriptionLines: string[] = [];
    while (this.lines.length) {
      this.currentLine = this.lines.shift();
      const subclassesTitleMatch = this.currentLine.match(/^##\s(.+)\((.+)\)/);
      const subclassesTitleMatchNotTranslated = this.currentLine.match(/^##\s(.+)/);
      if (subclassesTitleMatch) {
        this.classObject.subclassesTitleTranslated = subclassesTitleMatch[1];
        this.classObject.subclassesTitleOriginal = subclassesTitleMatch[2];
        this.lines.shift();
        break;
      } else if (subclassesTitleMatchNotTranslated) {
        this.classObject.subclassesTitleTranslated = null;
        this.classObject.subclassesTitleOriginal = subclassesTitleMatchNotTranslated[1];
        this.lines.shift();
        break;
      } else {
        descriptionLines.push(this.currentLine);
      }
    }
    this.classObject.description = descriptionLines.join('\n');
  }

  private parseSubclasses(): void {
    this.classObject.subclasses = [];
    let subclassLines = [];
    let subclass = null;

    while (this.lines.length) {
      this.currentLine = this.lines.shift();
      const subclassNameMatch = this.currentLine.match(/^###\s(.+)\((.+)\)/);
      const subclassNameMatchNotTranslated = this.currentLine.match(/^###\s(.+)/);
      if (subclassNameMatch) {
        if (subclass) {
          subclass.description = subclassLines.join('\n');
          this.classObject.subclasses.push(subclass);
        }

        subclass = new Subclass();
        subclassLines = [];
        subclass.nameOriginal = subclassNameMatch[2];
        subclass.nameTranslated = subclassNameMatch[1];
        this.currentLine = this.lines.shift();
        const sourceMatch = this.currentLine.match(/^Джерело:\s(.+)/);
        if (sourceMatch) {
          subclass.source = sourceMatch[1];
          this.lines.shift();
        }
      } else if (subclassNameMatchNotTranslated) {
        if (subclass) {
          console.log(subclass);
          console.log('store');
          subclass.description = subclassLines.join('\n');
          this.classObject.subclasses.push(subclass);
        }

        subclass = new Subclass();
        subclassLines = [];
        subclass.nameOriginal = subclassNameMatchNotTranslated[1];
        subclass.nameTranslated = null;
        this.currentLine = this.lines.shift();
        const sourceMatch = this.currentLine.match(/^Джерело:\s(.+)/);
        if (sourceMatch) {
          subclass.source = sourceMatch[1];
          this.lines.shift();
        }
      } else {
        subclassLines.push(this.currentLine);
      }
    }
  }
}