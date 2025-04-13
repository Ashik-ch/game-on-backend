/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { turf } from 'src/data';
import { CreateTurfDto, UpdateTurfDto } from './admin.dto';

@Injectable()
export class AdminService {
  private turf = turf;

  findAll(turfType?: string) {
    return turfType
      ? this.turf.filter((turf) => turf.turf_type === turfType)
      : this.turf;
  }

  findOne(id: number) {
    return this.turf.find((turf) => turf.id == id);
  }

  create(turfData: CreateTurfDto) {
    const newTurf = { id: this.turf.length + 1, ...turfData };
    this.turf.push(newTurf);
    return newTurf;
  }

  update(id: number, turfData: UpdateTurfDto) {
    const turfIndex = this.turf.findIndex((turf) => turf.id === id);
    if (turfIndex === -1) return null;
    this.turf[turfIndex] = { ...this.turf[turfIndex], ...turfData };
    return this.turf[turfIndex];
  }

  delete(id: number) {
    const turfIndex = this.turf.findIndex((turf) => turf.id === id);
    if (turfIndex === -1) return null;

    return this.turf.splice(turfIndex, 1)[0];
  }
}
