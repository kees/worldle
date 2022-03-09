// Source:
// US States with long/lat => https://developers.google.com/public-data/docs/canonical/states_csv
// US States images => https://github.com/coryetzkorn/state-svg-defs.git
// US State areas => https://www.census.gov/geographies/reference-files/2010/geo/state-area.html

import { areas } from "./area";
import { countries } from "./position";
import { countryCodesWithImage } from "./image";

export interface Country {
  code: string;
  latitude: number;
  longitude: number;
  name: string;
}

export const countriesWithImage = countries.filter((c) =>
  countryCodesWithImage.includes(c.code.toLowerCase())
);

export const smallCountryLimit = 0;
export const bigEnoughCountriesWithImage = countriesWithImage;

export function getCountryName(language: string, country: Country) {
  return country.name;
}

export function sanitizeCountryName(countryName: string): string {
  return countryName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[- '()]/g, "")
    .toLowerCase();
}
