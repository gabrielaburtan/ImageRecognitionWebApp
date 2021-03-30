import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Table {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 64, unique: true })
    Name!: string;

    @Column({})
    Size!: number;

    @Column({ length: 64 })
    Result!: string;
}