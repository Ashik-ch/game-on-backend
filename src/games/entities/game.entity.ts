/* eslint-disable prettier/prettier */
import { Turf } from 'src/turf/entities';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany } from 'typeorm';

@Entity('game')
export class Game {
    @PrimaryGeneratedColumn('uuid') id: string;
    @Column() game_name: string;
    @Column() turf_type: string;
    @CreateDateColumn() createdAt: Date;

    @ManyToMany(() => Turf, (turf) => turf.games) turfs: Turf[];   // relation for assign games
}
