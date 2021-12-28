import {Entity, ObjectIdColumn, ObjectID, Column, PrimaryColumn} from "typeorm";

@Entity()
export class Name {

    @ObjectIdColumn()
    nameId: string;

    @Column()
    title: string;

    @Column()
    first: string;

    @Column()
    last: string;

}
