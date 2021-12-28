import cors from 'cors';
import routes from './routes';
import express, { json, NextFunction, Request, Response } from 'express';
import AppError from '../errors/AppError';
import {createConnection, Connection} from "typeorm";


const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => {
        if (error instanceof AppError) {
            return response.status(error.statusCode).json({
                status: 'error',
                message: error.message,
            });
        }

        return response.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    },
);

createConnection({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: "test",
    logging: false,
    synchronize: true,
    entities: [
        "src/entity/**/*.ts"
    ],
    migrations: [
        "src/migration/**/*.ts"
    ],
    subscribers: [
        "src/subscriber/**/*.ts"
    ],
    cli: {
        entitiesDir: "src/entity",
        migrationsDir: "src/migration",
        subscribersDir: "src/subscriber"
    }

});

app.listen(3333, () => {
    console.log('Server Started on port 3333!');
})