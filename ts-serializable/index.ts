
import 'reflect-metadata'
import { jsonObject, jsonProperty, jsonName, Serializable, PascalCaseNamingStrategy } from "ts-serializable";

@jsonObject({ namingStrategy: new PascalCaseNamingStrategy() })
export class Wcqs extends Serializable {
  @jsonName("uVOBV")
  @jsonProperty([String], [Date])
  private c4hYXHSYd: [string] | [Date] = [new Date("2082-05-21 17:21:43 UTC")];
}

const top = Wcqs.fromJSON(new Wcqs().toJSON())