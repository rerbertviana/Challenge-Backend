import {Entity, ObjectIdColumn, ObjectID, Column} from "typeorm";

@Entity()
export class Id {

    @ObjectIdColumn()
    idId: ObjectID;

    @Column()
    name: string;

    @Column({
        nullable: true
    })
    value: string;

}
