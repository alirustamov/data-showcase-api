import { Covid19Status } from './Covid19Status';

export type Covid19DataByCountry = {
  Country: string;
  CountryCode: string;
  Province: string;
  City: string;
  CityCode: string;
  Lat: string;
  Lon: string;
  Cases: number;
  Status: Covid19Status;
  Date: string;
};
