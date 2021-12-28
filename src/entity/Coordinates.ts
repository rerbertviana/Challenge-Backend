import {Entity, ObjectIdColumn, ObjectID, Column} from "typeorm";

@Entity()
export class Coordinates {

    @ObjectIdColumn()
    coordinatesId: ObjectID;

    @Column()
    latitude: string;

    @Column()
    longitude: string;

}
