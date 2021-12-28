import { User } from "src/entity/User";
import { getManager, getMongoRepository } from "typeorm";


interface Irequest {
    gender: string;
}


class ListGenderService {

    public async execute({ gender }: Irequest): Promise<User[] | undefined> {

        //BUSCANDO TODOS OS USUARIOS
        const usersRepository = getMongoRepository(User);

        //FILTRANDO POR GENERO
        const users = await usersRepository.find({
            where: {
              gender: {$eq: gender},
            }
        });

        return users;
    }
}

export default ListGenderService;