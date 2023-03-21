import { Country } from "./countries/types";

export const enum LoadingState {
    IDLE = "IDLE",
    REQUEST = "REQUEST",
    SUCCESS = "DONE",
    FAILURE = "FAILURE"
  }

export const defualtEmptyCountry: Country = {
  "area": "",
  "alpha3Code": "",
  "alpha2Code": "",
  "altSpellings": [],
  "borders": [],
  "callingCodes": [],
  "cioc": "",
  "capital": "",
  "demonym": "",
  "flag": "",
  "independent": false,
  "latlng": [],
  "name": "",
  "nativeName": "",
  "numericCode": "",
  "region": ""
}