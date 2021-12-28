import {Entity, ObjectIdColumn, ObjectID, Column} from "typeorm";

@Entity()
export class Street {

    @ObjectIdColumn()
    streetId: ObjectID;

    @Column()
    number: number;

    @Column()
    name: string;

}
