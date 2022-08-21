import mongoose from 'mongoose';

export const covidDataSummarySchema = new mongoose.Schema({
  Country: String,
  CountryCode: String,
  Slug: String,
  NewConfirmed: Number,
  TotalConfirmed: Number,
  NewDeaths: Number,
  TotalDeaths: Number,
  NewRecovered: Number,
  TotalRecovered: Number,
  Province: String,
  CityCode: String,
  Lat: String,
  Lon: String,
  Cases: Number,
  Status: String,
  Date: Date,
});
