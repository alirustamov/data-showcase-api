import { Covid19DataCommonItem } from '../../../types/Covid19DataCommonItem';
import { CovidData } from '../models/CovidDataModel';

export const storeAllCovid19Data = (
  data: ReadonlyArray<Covid19DataCommonItem>,
) => {
  CovidData.insertMany(data);
};
