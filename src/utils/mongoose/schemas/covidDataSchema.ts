import mongoose from 'mongoose';

export const covidDataSchema = new mongoose.Schema({
  Country: String,
  CountryCode: String,
  Province: String,
  CityCode: String,
  Lat: String,
  Lon: String,
  Cases: Number,
  Status: String,
  Date: Date,
  Confirmed: Number,
  Deaths: Number,
  Recovered: Number,
  Active: Number,
});
