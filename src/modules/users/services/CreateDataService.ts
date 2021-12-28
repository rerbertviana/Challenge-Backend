import usersJSON from '../../../users.json';
import CreateUserService from "./CreateUserService";

class CreateDataService {

    public async execute(): Promise<void> {

        const createUsers = new CreateUserService();

        for(let i=0; i<usersJSON.results.length;i++) {
            await createUsers.execute({ 
                gender: usersJSON.results[i].gender,
                name: usersJSON.results[i].name,
                location: usersJSON.results[i].location,
                email: usersJSON.results[i].email,
                login: usersJSON.results[i].login,
                dob: usersJSON.results[i].dob,
                registered: usersJSON.results[i].registered,
                phone: usersJSON.results[i].phone,
                cell: usersJSON.results[i].cell,
                id: usersJSON.results[i].id,
                picture: usersJSON.results[i].picture,
                nat: usersJSON.results[i].nat
            });
        }
    }
}

export default CreateDataService;