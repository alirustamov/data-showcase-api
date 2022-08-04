import { Controller, Get, Query } from '@nestjs/common';
import { StatsService } from '../services/stats.service';
import type { Stat } from '../types/Stat';
import { Covid19DataByCountry } from '../types/Covid19DataByCountry';

@Controller('stats')
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get()
  getStats(
    @Query()
    query,
  ): ReadonlyArray<Stat> {
    console.log('stats', query);
    return this.statsService.getStats(query.dateFrom, query.dateTo);
  }

  // @Get('/checkApi')
  // async checkApi(@Query() query): Promise<ReadonlyArray<Covid19DataByCountry>> {
  //   return await this.statsService.checkApi();
  // }
}
