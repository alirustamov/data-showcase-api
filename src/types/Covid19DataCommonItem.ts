import { Covid19DataItem } from './Covid19DataItem';

export type Covid19DataCommonItem = Covid19DataItem & {
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Active: number;
};
