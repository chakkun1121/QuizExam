"use client";
import { XMLBuilder } from "fast-xml-parser";
import { fileObjectType } from "../@types/filesInfoType";

export function objectToXml(object: fileObjectType): string {
  return new XMLBuilder({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
  }).build(object);
}
