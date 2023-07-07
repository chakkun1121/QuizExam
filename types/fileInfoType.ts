"use client";
import { savedPlaceType } from "./savedPlaceType";

export interface fileInfoType {
  ID: string;
  name: string;
  createdDate: Date;
  lastUpdatedDate: Date;
  savedPlace: savedPlaceType;
}
