import {Entity, ObjectIdColumn, ObjectID, Column} from "typeorm";

@Entity()
export class Timezone {

    @ObjectIdColumn()
    timezoneId: ObjectID;

    @Column()
    offset: string;

    @Column()
    description: string;

}
