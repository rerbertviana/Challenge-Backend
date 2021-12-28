import { Coordinates } from "src/entity/Coordinates";
import { Dob } from "src/entity/Dob";
import { Id } from "src/entity/Id";
import { Location } from "src/entity/Location";
import { Login } from "src/entity/Login";
import { Name } from "src/entity/Name";
import { Picture } from "src/entity/Picture";
import { Registered } from "src/entity/Registered";
import { Street } from "src/entity/Street";
import { Timezone } from "src/entity/Timezone";
import { User } from "src/entity/User";
import { getMongoRepository} from "typeorm";


//INTERFACES DE ENTRADA DE DADOS

interface Iname {
    title: string;
    first: string;
    last: string;
}

interface Istreet {
    number: number;
    name: string;
}

interface Icoordinates {
    latitude: string;
    longitude: string;
}

interface Itimezone {
    offset: string;
    description: string;
}

interface Ilocation {
    street: Istreet;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: Icoordinates;
    timezone: Itimezone;
}

interface Ilogin {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

interface Idob {
    date: string;
    age: number;
}

interface Iregistered {
    date: string;
    age: number;
}

interface Iid {
    name: string;
    value: any;
}

interface Ipicture {
    large: string;
    medium: string;
    thumbnail: string;
}

interface Irequest {
    gender: string;
    name: Iname;
    location: Ilocation;
    email: string;
    login: Ilogin;
    dob: Idob;
    registered: Iregistered;
    phone: string;
    cell: string;
    id: Iid;
    picture: Ipicture;
    nat: string;
}

class CreateUserService {

    public async execute({ gender, name, location, email, login, dob, registered, phone, cell, id, picture, nat }: Irequest): Promise<User> {

        //CRIANDO O USUÁRIO

        const user = new User();

        //ENTRADAS DE USER
        
        user.gender = gender;
        user.email = email;
        user.phone = phone;
        user.cell = cell;
        user.nat = nat;

        //ENTRADAS DE USER.NAME

        user.name = new Name();

        user.name.title = name.title;
        user.name.first = name.first;
        user.name.last = name.last;

        //ENTRAS DE USER.LOCATION
        
        user.location = new Location();

        user.location.city = location.city;
        user.location.state = location.state;
        user.location.country = location.country;
        user.location.postcode = location.postcode;

        //ENTRADAS DE USER.LOCATION.STREET

        user.location.street = new Street();

        user.location.street.number = location.street.number;
        user.location.street.name = location.street.name;

        //ENTRADAS DE USER.LOCATION.COORDINATES

        user.location.coordinates = new Coordinates();

        user.location.coordinates.latitude = location.coordinates.latitude;
        user.location.coordinates.longitude = location.coordinates.longitude;

        //ENTRADAS DE USER.LOCATION.TIMEZONE

        user.location.timezone = new Timezone();

        user.location.timezone.offset = location.timezone.offset;
        user.location.timezone.description = location.timezone.description;

        //ENTRADAS DE USER.LOGIN

        user.login = new Login();

        user.login.uuid = login.uuid;
        user.login.username = login.username;
        user.login.password = login.password;
        user.login.salt = login.salt;
        user.login.md5 = login.md5;
        user.login.sha1 = login.sha1;
        user.login.sha256 = login.sha256;

        //ENTRADAS DE USER.DOB

        user.dob = new Dob();

        user.dob.date = dob.date;
        user.dob.age = dob.age;

        //ENTRADAS DE USER.REGISTERED

        user.registered = new Registered();

        user.registered.date = registered.date;
        user.registered.age = registered.age;

        //ENTRADAS DE USER.ID

        user.id = new Id();

        user.id.name = id.name;
        user.id.value = id.value;

        //ENTRADAS DE USER.PICTURE

        user.picture = new Picture();

        user.picture.large = picture.large;
        user.picture.medium = picture.medium;
        user.picture.thumbnail = picture.thumbnail;

        //SALVANDO USER NO MONGODB

        const usersRepository = getMongoRepository(User);
        await usersRepository.save(user);

        return user;
    }

}

export default CreateUserService;