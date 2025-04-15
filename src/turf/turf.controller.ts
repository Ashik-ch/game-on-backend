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
import { Prisma } from '@prisma/client';

@Controller('turf')
export class TurfController {
  constructor(private readonly turfService: TurfService) { }

  @Post()
  create(@Body() createTurfDto: Prisma.TurfCreateInput) {
    return this.turfService.create(createTurfDto);
  }

  @Get()
  findAll(@Query('turfType') turfType?: 'Indoor' | 'Outdoor') {
    return this.turfService.findAll(turfType);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.turfService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTurfDto: Prisma.TurfUpdateInput,
  ) {
    return this.turfService.update(+id, updateTurfDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.turfService.remove(+id);
  }
}
