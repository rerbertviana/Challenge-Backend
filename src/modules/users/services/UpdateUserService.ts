
import { User } from "src/entity/User";
import { getMongoRepository } from "typeorm";


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
    userId: any;
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

class UpdateUserService {

    public async execute({ userId, gender, name, location, email, login, dob, registered, phone, cell, id, picture, nat }: Irequest): Promise<User | undefined> {

        //ATUALIZANDO UM USUARIO PELO ID
        const usersRepository = getMongoRepository(User);

        const user = await usersRepository.findOne(userId);

        if(user) {
            user.gender = gender;
            user.name.title = name.title;
            user.name.first = name.first;
            user.name.last = name.last;
            user.location.street.number = location.street.number;
            user.location.street.name = location.street.name;
            user.location.city = location.city;
            user.location.state = location.state;
            user.location.country = location.country;
            user.location.postcode = location.postcode;
            user.location.coordinates.latitude = location.coordinates.latitude;
            user.location.coordinates.longitude = location.coordinates.longitude;
            user.location.timezone.offset = location.timezone.offset;
            user.location.timezone.description = location.timezone.description;
            user.email = email;
            user.login.uuid = login.uuid;
            user.login.username = login.username;
            user.login.password = login.password;
            user.login.salt = login.salt;
            user.login.md5 = login.md5;
            user.login.sha1 = login.sha1;
            user.login.sha256 = login.sha256;
            user.dob.date = dob.date;
            user.dob.age = dob.age;
            user.registered.date = registered.date;
            user.registered.age = registered.age;
            user.phone = phone;
            user.cell = cell;
            user.id.name = id.name;
            user.id.value = id.value;
            user.picture.large = picture.large;
            user.picture.medium = picture.medium;
            user.picture.thumbnail = picture.thumbnail;
            user.nat = nat;

            await usersRepository.update(userId, user);
        }
        
    return user;

    }
}

export default UpdateUserService;