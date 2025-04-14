/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class TurfService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createTurfDto: Prisma.TurfCreateInput) {
    return this.databaseService.turf.create({ data: createTurfDto });
  }

  findAll(turfType?: 'Indoor' | 'Outdoor') {
    if (turfType) {
      return this.databaseService.turf.findMany({
        where: { turf_type: turfType },
      });
    }
    return this.databaseService.turf.findMany();
  }

  findOne(id: number) {
    return this.databaseService.turf.findUnique({ where: { id } });
  }

  update(id: number, updateTurfDto: Prisma.TurfUpdateInput) {
    return this.databaseService.turf.update({
      where: { id },
      data: updateTurfDto,
    });
  }

  remove(id: number) {
    return this.databaseService.turf.delete({ where: { id } });
  }
}
