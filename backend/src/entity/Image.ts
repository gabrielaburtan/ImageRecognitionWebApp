import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Image {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    checked: boolean;

    @Column()
    name: string;

    @Column()
    size: number;

    @Column()
    recognition: number;

    @Column()
    download: string;

}
