import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import UsersController from '../controller/UsersController';


const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            gender: Joi.string().required(),
            name: Joi.required(),
            location: Joi.required(),
            email: Joi.string().required(),
            login: Joi.required(),
            dob: Joi.required(),
            registered: Joi.required(),
            phone: Joi.string().required(),
            cell: Joi.string().required(),
            id: Joi.required(),
            picture: Joi.required(),
            nat: Joi.string().required(),
        },
    }),
    usersController.create
);

usersRouter.put(
    '/:userId',
    celebrate({
        [Segments.PARAMS]: {
            userId: Joi.required()
        },
        [Segments.BODY]: {
            gender: Joi.string().required(),
            name: Joi.required(),
            location: Joi.required(),
            email: Joi.string().required(),
            login: Joi.required(),
            dob: Joi.required(),
            registered: Joi.required(),
            phone: Joi.string().required(),
            cell: Joi.string().required(),
            id: Joi.required(),
            picture: Joi.required(),
            nat: Joi.string().required(),
        },
    }),
    usersController.update
);

usersRouter.get('/data', usersController.banco);

usersRouter.get('/', usersController.index);

usersRouter.get(
    '/:userId',
    celebrate({
        [Segments.PARAMS]: {
            userId: Joi.required()
        },
    }),
    usersController.show
);

usersRouter.delete(
    '/:userId',
    celebrate({
        [Segments.PARAMS]: {
            userId: Joi.required()
        },
    }),
    usersController.delete
);

export default usersRouter;