/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { turf } from 'src/data';
import { CreateTurfDto, UpdateTurfDto } from './DTO/admin.dto';

@Injectable()
export class AdminService {
  private turf = turf;

  findAll(turfType?: string) {
    if (turfType) {
      const filteredTurfs = this.turf.filter(
        (turf) => turf.turf_type === turfType,
      );
      if (filteredTurfs.length === 0) {
        throw new NotFoundException('No turfs found for the specified type');
      }
      return filteredTurfs;
    }
    return this.turf;
  }

  findOne(id: number) {
    const user = this.turf.find((turf) => turf.id == id);
    if (!user) throw new NotFoundException(`Turf with id ${id} not found`);
    return user;
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
