import { Request, Response } from "express";
import CreateDataService from "../services/CreateDataService";
import CreateUserService from "../services/CreateUserService";
import DeleteUserService from "../services/DeleteUserService";
import ListGenderService from "../services/ListGenderService";
import ListUserService from "../services/ListUserService";
import ShowUserService from "../services/ShowUserService";
import UpdateUserService from "../services/UpdateUserService";


export default class UsersController {

    public async index(request: Request, response: Response): Promise<Response> {
        
        const listusers = new ListUserService();

        const users = await listusers.execute();

        return response.json(users);
    }

    public async banco(request: Request, response: Response): Promise<Response> {
        
        const dataUsers = new CreateDataService();

        const users = await dataUsers.execute();

        return response.json(users);
    }

    public async create(request: Request, response: Response): Promise<Response> {
        
        const { gender, name, location, email, login, dob, registered, phone, cell, id, picture, nat} = request.body;
        
        const createUsers = new CreateUserService();

        const user = await createUsers.execute({
            gender,
            name,
            location,
            email,
            login,
            dob,
            registered,
            phone,
            cell,
            id,
            picture,
            nat,
        });

        return response.json(user);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        
        const { userId } = request.params;
        
        const showUser = new ShowUserService();

        const user = await showUser.execute({ userId });

        return response.json(user);
    }

    public async gender(request: Request, response: Response): Promise<Response> {
        
        const { gender } = request.params;
        
        const listGender = new ListGenderService();

        const user = await listGender.execute({ gender });

        return response.json(user);
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const { userId } = request.params;

        const deleteUser = new DeleteUserService();

        await deleteUser.execute({ userId });

        return response.json([]);
    }

    public async update(request: Request, response: Response): Promise<Response> {

        const { userId } = request.params;
        const { gender, name, location, email, login, dob, registered, phone, cell, id, picture, nat} = request.body;
        
        const updateUsers = new UpdateUserService();

        const user = await updateUsers.execute({
            userId,
            gender,
            name,
            location,
            email,
            login,
            dob,
            registered,
            phone,
            cell,
            id,
            picture,
            nat,
        });

        return response.json(user);
    }
    
}