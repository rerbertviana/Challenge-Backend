import { User } from "src/entity/User";
import { getManager, getMongoRepository } from "typeorm";



class ListUserService {

    public async execute(): Promise<User[] | undefined> {


        //BUSCANDO TODOS OS USUARIOS
        const usersRepository = getMongoRepository(User)

        const users = usersRepository.find()

        return users;
    }
}

export default ListUserService;