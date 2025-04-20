import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './entities/game.entity';
import { Turf } from 'src/turf/entities/turf.entity';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GamesService {

  constructor(
    @InjectRepository(Game) private gameRepo: Repository<Game>,
    @InjectRepository(Turf) private turfRepo: Repository<Turf>,
  ) { }

  async create(createGameDto: CreateGameDto) {
    const game = this.gameRepo.create({ ...createGameDto });
    return this.gameRepo.save(game);
  }

  findAll() {
    return this.gameRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} game`;
  }

  async update(id: string, updateGameDto: UpdateGameDto) {
    await this.gameRepo.update(id, { ...updateGameDto });
    return this.gameRepo.findOne({ where: { id } });
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
