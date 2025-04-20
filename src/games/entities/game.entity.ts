/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('game')
export class Game {
    @PrimaryGeneratedColumn('uuid') id: string;
    @Column() game_name: string;
    @Column() turf_type: string;   // 'Indoor' | 'Outdoor'
    @CreateDateColumn() createdAt: Date;
}
