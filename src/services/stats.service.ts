import { Injectable } from '@nestjs/common';
import type { Stat } from '../types/Stat';
import { validateDate } from '../utils/validateDate';
import { Covid19DataByCountryItem } from '../types/Covid19DataByCountryItem';
import { covid19ApiAuthKey } from '../utils/constants';
import axios from 'axios';
import { Covid19DataCommonItem } from '../types/Covid19DataCommonItem';
import { axiosCurrentServerInstance } from '../utils/axiosConfig';
import { storeAllCovid19Data } from '../utils/mongoose/services/storeAllCovid19Data';

@Injectable()
export class StatsService {
  getStats(dateFrom: string, dateTo: string): ReadonlyArray<Stat> {
    console.log(validateDate(dateFrom), validateDate(dateTo));
    return [
      {
        id: 1,
        num: 35,
      },
      {
        id: 2,
        num: 43,
      },
    ];
  }

  /**
   * query examples:
   * /?from=2022-06-01T00:00:00Z&to=2022-08-20T00:00:00Z
   */
  async checkApi(): Promise<ReadonlyArray<Covid19DataByCountryItem>> {
    const result = await axios.get<ReadonlyArray<Covid19DataByCountryItem>>(
      'https://api.covid19api.com/country/russia/status/confirmed',
      {
        headers: {
          Authorization: `Basic ${covid19ApiAuthKey}`,
        },
      },
    );
    return result.data;
  }

  // async getAllCovidData(): Promise<ReadonlyArray<Covid19DataCommonItem>> {
  //   try {
  //     const result = await axiosCurrentServerInstance.get<
  //       ReadonlyArray<Covid19DataCommonItem>
  //     >('/all.json');
  //     storeAllCovid19Data(result.data);
  //     return result.data;
  //   } catch (e) {
  //     return e;
  //   }
  // }
}
