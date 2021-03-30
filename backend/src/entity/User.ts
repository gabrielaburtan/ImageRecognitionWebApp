import {Column, Entity, PrimaryGeneratedColumn,} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 64, unique: true })
    email!: string;

    @Column({ length: 64 })
    password!: string;
}