import {Entity, ObjectIdColumn, ObjectID, Column} from "typeorm";

@Entity()
export class Login {

    @ObjectIdColumn()
    loginId: ObjectID;

    @Column()
    uuid: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @Column()
    md5: string;

    @Column()
    sha1: string;

    @Column()
    sha256: string;

}
