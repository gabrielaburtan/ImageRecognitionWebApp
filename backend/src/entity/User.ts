import {Column, Entity, PrimaryGeneratedColumn,} from "typeorm";

@Entity("user")
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 64, unique: true })
    email!: string;

    @Column({ length: 64 })
    password!: string;

    constructor (email : string , password : string) {
        this.email=email;
        this.password=password;
    }
}

