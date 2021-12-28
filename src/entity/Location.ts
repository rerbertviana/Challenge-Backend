import {Entity, ObjectIdColumn, ObjectID, Column} from "typeorm";
import { Coordinates } from "./Coordinates";
import { Street } from "./Street";
import { Timezone } from "./Timezone";

@Entity()
export class Location {

    @ObjectIdColumn()
    locationId: ObjectID;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    country: string;

    @Column()
    postcode: number;

    @Column(type => Street)
    street: Street;

    @Column(type => Coordinates)
    coordinates: Coordinates;

    @Column(type => Timezone)
    timezone: Timezone;

}
