import mongoose from 'mongoose';
import { covidDataSchema } from '../schemas/CovidDataSchema';

export const CovidData = mongoose.model('CovidData', covidDataSchema);
