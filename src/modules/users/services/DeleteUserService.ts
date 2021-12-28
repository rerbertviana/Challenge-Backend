import { User } from "src/entity/User";
import { getMongoRepository } from "typeorm";

interface Irequest {
    userId: any;
}

class DeleteUserService {

    public async execute({ userId }: Irequest): Promise<void> {

        //REMOVENDO UM USUARIO PELO ID
        const usersRepository = getMongoRepository(User);

        const user = await usersRepository.delete(userId);

    }
}

export default DeleteUserService;