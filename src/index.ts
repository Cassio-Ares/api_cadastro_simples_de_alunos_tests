import express from 'express';
import alunoRoute from './module/aluno/aluno.route';
import * as dotenv from "dotenv";
import { KnexService } from './service/knex';


const app = express();
dotenv.config()// tester
app.use(express.json());

app.use('/aluno', alunoRoute);

app.listen(8080, () => {
   console.log('server running!');
});
