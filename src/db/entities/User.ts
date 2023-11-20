import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Relation } from "typeorm"
import { Task } from "./Task.js"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @OneToMany(() => Task, task => task.user)
    tasks: Relation<Task[]>;

}
