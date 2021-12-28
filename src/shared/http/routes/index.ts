import { Router } from 'express';
import usersRouter from 'src/modules/users/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);

routes.get('/', (request, response) => {
    return response.json({ message: 'REST Fullstack Challenge 20201209 Running' });
});

export default routes;