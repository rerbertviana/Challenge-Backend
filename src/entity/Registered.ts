import {Entity, ObjectIdColumn, ObjectID, Column} from "typeorm";

@Entity()
export class Registered {

    @ObjectIdColumn()
    registeredId: ObjectID;

    @Column()
    date: string;

    @Column()
    age: number;

}
