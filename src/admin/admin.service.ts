/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { turf } from 'src/data';
import { CreateTurfDto, UpdateTurfDto } from './DTO/admin.dto';

@Injectable()
export class AdminService {
  private turf = turf;

  findAll(turfType?: string) {
    if (turfType) {
      const filteredTurfs = this.turf.filter(
        (turf) => turf.turf_types.includes(turfType),
      );
      if (filteredTurfs.length === 0) {
        throw new NotFoundException('No turfs found for the specified type'); //   @throws {NotFoundException} If no turfs are found for the specified type.
      }
      return filteredTurfs;
    }
    return this.turf;
  }

  findOne(id: string) {
    const user = this.turf.find((turf) => turf.id == id);
    if (!user) throw new NotFoundException(`Turf with id ${id} not found`);
    return user;
  }

  create(turfData: CreateTurfDto) {
    const { id, ...rest } = turfData;
    const newTurf = { id: uuid(), ...rest };
    this.turf.push(newTurf);
    return newTurf;
  }


  update(id: string, turfData: UpdateTurfDto) {
    const turfIndex = this.turf.findIndex((turf) => turf.id === id);
    if (turfIndex === -1) return null;
    this.turf[turfIndex] = { ...this.turf[turfIndex], ...turfData, id: this.turf[turfIndex].id.toString() };
    return this.turf[turfIndex];
  }

  delete(id: string) {
    const turfIndex = this.turf.findIndex((turf) => turf.id === id);
    if (turfIndex === -1) {
      throw new NotFoundException(`Turf with id ${id} not found`);
    }
    return this.turf.splice(turfIndex, 1)[0];
  }
}
