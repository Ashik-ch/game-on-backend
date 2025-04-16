/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateTurfDto } from './dto/create-turf.dto';
import { UpdateTurfDto } from './dto/update-turf.dto';

@Injectable()
export class TurfService {
  constructor(private readonly databaseService: DatabaseService) { }

  create(createTurfDto: CreateTurfDto) {
    return this.databaseService.turf.create({
      data: {
        turf_name: createTurfDto.turf_name,
        mobile_number: createTurfDto.mobile_number,
        opening_time: createTurfDto.opening_time,
        closing_time: createTurfDto.closing_time,
        turf_address: createTurfDto.turf_address,
        turf_types: createTurfDto.turf_types,
        turf_email: createTurfDto.turf_email,
        turf_password: createTurfDto.turf_password,
      },
    });
  }

  findAll(turfType?: 'Indoor' | 'Outdoor') {
    if (turfType) {
      return this.databaseService.turf.findMany({
        where: { turf_types: { has: turfType } },
      });
    }
    return this.databaseService.turf.findMany();
  }

  findOne(id: number) {
    return this.databaseService.turf.findUnique({ where: { id } });
  }

  update(id: number, updateTurfDto: UpdateTurfDto) {
    return this.databaseService.turf.update({
      where: { id },
      data: updateTurfDto,
    });
  }

  remove(id: number) {
    return this.databaseService.turf.delete({ where: { id } });
  }
}