import { Injectable } from '@nestjs/common';
import type { Stat } from '../types/Stat';
import { validateDate } from '../utils/validateDate';

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
}
