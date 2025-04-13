/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { turf } from 'src/data';
import { CreateTurfDto, UpdateTurfDto } from './admin.dto';

@Injectable()
export class AdminService {
  turf = turf;

  findAll(turf_type?: string) {
    if (turf_type) {
      return this.turf.filter((turf) => turf.turf_type === turf_type);
    }
    return this.turf;
  }

  findOne(id: number) {
    if (id) {
      return this.turf.find((turf) => turf.id == id);
    }
    return null;
  }

  create(turfData: CreateTurfDto) {
    const newTurf = {
      id: this.turf.length + 1,
      ...turfData,
    };
    this.turf.push(newTurf);
    return newTurf;
  }

  update(id: string, turfData: UpdateTurfDto) {
    const turfIndex = this.turf.findIndex((turf) => turf.id === +id);
    if (turfIndex !== -1) {
      this.turf[turfIndex] = { ...this.turf[turfIndex], ...turfData };
      return this.turf[turfIndex];
    }
    return null;
  }

  delete(id: string) {
    const turfIndex = this.turf.findIndex((turf) => turf.id === +id);
    if (turfIndex !== -1) {
      const deletedTurf = this.turf.splice(turfIndex, 1);
      return deletedTurf[0];
    }
    return null;
  }
}
