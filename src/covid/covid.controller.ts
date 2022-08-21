import { Controller, Get, Query } from '@nestjs/common';
import { StatsService } from '../services/stats.service';
import { Covid19DataCommonItem } from '../types/Covid19DataCommonItem';

@Controller('covid')
export class CovidController {
  constructor(private readonly statsService: StatsService) {}

  @Get()
  allCovidData(): Promise<string | ReadonlyArray<Covid19DataCommonItem>> {
    // this.statsService.getAllCovidData().then();
    return Promise.resolve('Not Saved');
  }
}
