/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Turf } from './entities';
import { Game } from 'src/games/entities';
import { AssignGamesDto, CreateTurfDto, UpdateTurfDto } from './dto';

@Injectable()
export class TurfService {

  constructor(
    @InjectRepository(Turf) private readonly turfRepo: Repository<Turf>,
    @InjectRepository(Game) private readonly gameRepo: Repository<Game>,
  ) { }

  /**   * Create a new turf   */
  async create(createTurfDto: CreateTurfDto): Promise<Turf> {
    const turf = this.turfRepo.create(createTurfDto);
    return this.turfRepo.save(turf);
  }

  /**
   * Retrieve all turfs, optionally filtered by a turf type (Indoor/Outdoor)
   */
  async findAll(turfType?: string): Promise<Turf[]> {
    const qb = this.turfRepo.createQueryBuilder('turf');
    if (turfType) {
      qb.where(':type = ANY(turf.turf_types)', { type: turfType });
    }
    return qb.getMany();
  }

  /** Retrieve a single turf by ID  */
  async findOne(id: string): Promise<Turf> {
    return this.turfRepo.findOneOrFail({
      where: { id },
    });
  }

  /**   * Update an existing turf  */
  async update(id: string, dto: UpdateTurfDto): Promise<Turf> {
    await this.turfRepo.update(id, dto);
    return this.findOne(id);
  }

  /**   * Remove a turf by ID   */
  async remove(id: string): Promise<void> {
    await this.turfRepo.delete(id);
  }

  /**  assigning games to turf  */
  async assignGamesToTurf(turfId: string, assignGamesDto: AssignGamesDto): Promise<Turf> {
    const { games } = assignGamesDto;
    const turf = await this.turfRepo.findOne({
      where: { id: turfId },
      relations: ['games'],
    });
    if (!turf) throw new NotFoundException('Turf not found');
    const selectedGames = await this.gameRepo.findByIds(games);
    turf.games = selectedGames;
    return await this.turfRepo.save(turf);
  }

}
