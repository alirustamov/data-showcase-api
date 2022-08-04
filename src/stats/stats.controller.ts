import { Controller, Get, Param, Query, Req, Request } from '@nestjs/common';
import { StatsService } from '../services/stats.service';
import type { Stat } from '../types/Stat';

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
}
