/* eslint-disable prettier/prettier */
import { Game } from 'src/games/entities/game.entity';
import {
    Entity, PrimaryGeneratedColumn, Column,
    CreateDateColumn, UpdateDateColumn
} from 'typeorm';

@Entity('turf')
export class Turf {
    @PrimaryGeneratedColumn('uuid') id: string;
    @Column() turf_name: string;
    @Column() mobile_number: string;
    @Column() opening_time: string;
    @Column() closing_time: string;
    @Column() turf_address: string;
    @Column('text', { array: true }) turf_types: string[];
    @Column({ unique: true }) turf_email: string;
    @Column() turf_password: string;
    @CreateDateColumn() createdAt: Date;
    @UpdateDateColumn() updatedAt: Date;
}
