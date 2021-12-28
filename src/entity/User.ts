import {Entity, ObjectIdColumn, ObjectID, Column} from "typeorm";
import { Dob } from "./Dob";
import { Location } from "./Location";
import { Login } from "./Login";
import { Name } from "./Name";
import { Registered } from "./Registered";
import { Id } from "./Id";
import { Picture } from "./Picture";

@Entity()
export class User {

    @ObjectIdColumn()
    userId: ObjectID;

    @Column()
    gender: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    cell: string;

    @Column()
    nat: string;

    @Column(type => Name)
    name: Name;

    @Column(type => Location)
    location: Location;

    @Column(type => Login)
    login: Login;

    @Column(type => Dob)
    dob: Dob;

    @Column(type => Registered)
    registered: Registered;

    @Column(type => Id)
    id: Id;

    @Column(type => Picture)
    picture: Picture;

}
