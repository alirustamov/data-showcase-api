import { Controller, Get, Query } from '@nestjs/common';
import { StatsService } from '../services/stats.service';
import type { Stat } from '../types/Stat';
import { Covid19DataByCountryItem } from '../types/Covid19DataByCountryItem';
import { CovidData } from '../utils/mongoose/models/CovidDataModel';

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

  @Get('/checkApi')
  async checkApi(
    @Query() query,
  ): Promise<ReadonlyArray<Covid19DataByCountryItem>> {
    const date = new Date(2022, 8, 20);
    // const cases = await CovidData.find({
    //   CountryCode: ['KZ', 'RU'],
    // });
    // console.log(cases);
    // const theCase = await CovidData.findOne({
    //   CountryCode: 'RU',
    //   Date: date,
    // });
    // console.log(theCase);
    // if (!theCase) {
    //   const oneCase = new CovidData({
    //     Country: 'Russian Federation',
    //     CountryCode: 'RU',
    //     Province: '',
    //     CityCode: '',
    //     Lat: '',
    //     Lon: '',
    //     Cases: 0,
    //     Status: 'confirmed',
    //     Date: date,
    //   });
    //   await oneCase.save();
    // }
    const result = await this.statsService.checkApi();
    await CovidData.insertMany(result);
    return result;
  }

  @Get('/checkAllCases')
  async checkAllCases(
    @Query() query,
  ): Promise<ReadonlyArray<Covid19DataByCountryItem>> {
    const date = new Date(2022, 8, 20);
    const cases = await CovidData.find({
      CountryCode: ['KZ', 'RU'],
    });
    console.log(cases);
    const theCase = await CovidData.findOne({
      CountryCode: 'RU',
      Date: date,
    });
    console.log(theCase);
    if (!theCase) {
      const oneCase = new CovidData({
        Country: 'Russian Federation',
        CountryCode: 'RU',
        Province: '',
        CityCode: '',
        Lat: '',
        Lon: '',
        Cases: 0,
        Status: 'confirmed',
        Date: date,
      });
      await oneCase.save();
    }

    return await this.statsService.checkApi();
  }
}
