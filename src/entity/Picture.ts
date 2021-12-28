import {Entity, ObjectIdColumn, ObjectID, Column} from "typeorm";

@Entity()
export class Picture {

    @ObjectIdColumn()
    pictureId: ObjectID;

    @Column()
    large: string;

    @Column()
    medium: string;

    @Column()
    thumbnail: string;
}
