"use client";
import { fileObjectType } from "../@types/filesInfoType";
import { XMLParser } from "fast-xml-parser";

export function xmlToObject(xml: string): fileObjectType {
  return new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    allowBooleanAttributes: true,
    alwaysCreateTextNode: true,
  }).parse(xml);
}
