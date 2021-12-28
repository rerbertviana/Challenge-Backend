import { User } from "src/entity/User";
import { getMongoRepository } from "typeorm";

interface Irequest {
    userId: any;
}

class ShowUserService {

    public async execute({ userId }: Irequest): Promise<User | undefined> {

        //BUSCANDO UM USUARIO PELO ID
        const usersRepository = getMongoRepository(User)

        const user = await usersRepository.findOne(userId)

        return user;
    }
}

export default ShowUserService;