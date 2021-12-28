import {Entity, ObjectIdColumn, ObjectID, Column} from "typeorm";

@Entity()
export class Dob {

    @ObjectIdColumn()
    dobId: ObjectID;

    @Column()
    date: string;

    @Column()
    age: number;

}
