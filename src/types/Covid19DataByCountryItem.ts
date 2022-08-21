import { Covid19Status } from './Covid19Status';
import { Covid19DataItem } from './Covid19DataItem';

export type Covid19DataByCountryItem = Covid19DataItem & {
  Status: Covid19Status;
};
