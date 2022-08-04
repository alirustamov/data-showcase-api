import { Injectable } from '@nestjs/common';
import type { Stat } from '../types/Stat';
import { validateDate } from '../utils/validateDate';
import { Covid19DataByCountry } from '../types/Covid19DataByCountry';
import { covid19ApiAuthKey } from '../utils/constants';
import axios from 'axios';

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

  async checkApi(): Promise<ReadonlyArray<Covid19DataByCountry>> {
    const result = await axios.get<ReadonlyArray<Covid19DataByCountry>>(
      'https://api.covid19api.com/country/kazakhstan/status/confirmed?from=2022-06-01T00:00:00Z&to=2022-08-04T00:00:00Z',
      {
        headers: {
          Authorization: `Basic ${covid19ApiAuthKey}`,
        },
      },
    );
    return result.data;
  }
}
