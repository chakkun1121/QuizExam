import { XMLParser } from "fast-xml-parser";

export function xmlFileToJson(stringFile: string) {
  const jsonFile: object = new XMLParser({
    ignoreAttributes: false,
  }).parse(stringFile);
  return jsonFile;
}
