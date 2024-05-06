import express from 'express';
import alunoRoute from './module/aluno/aluno.route';
import * as dotenv from "dotenv";


const app = express();
app.use(express.json());

app.use('/aluno', alunoRoute);

app.listen(8080, () => {
   console.log('server running!');
});
