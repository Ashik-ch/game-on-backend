/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TurfService } from './turf.service';
import { AssignGamesDto, CreateTurfDto, UpdateTurfDto, } from './dto';

@Controller('turf')
export class TurfController {
  constructor(private readonly turfService: TurfService) { }

  @Post()
  create(@Body() createTurfDto: CreateTurfDto) {
    return this.turfService.create(createTurfDto);
  }

  @Get()
  findAll(@Query('turfType') turfType?: 'Indoor' | 'Outdoor') {
    return this.turfService.findAll(turfType);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.turfService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTurfDto: UpdateTurfDto,
  ) {
    return this.turfService.update(id, updateTurfDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.turfService.remove(id);
  }

  /**  assigning games to turf  */
  @Post('assign-games/:id')
  assignGames(@Param('id') id: string, @Body() assignGamesDto: AssignGamesDto) {
    return this.turfService.assignGamesToTurf(id, assignGamesDto);
  }

}
