import express from 'express';
import {Aluno} from './aluno.model';
import { KnexService } from '../../service/knex';

const router = express.Router();

const alunoController = new Aluno(new KnexService)

router.get('/', async (_, res) => {
  const data = await alunoController.getAll();
  return res.status(200).json({ data });
});

router.post('/', async (req, res) => {
  if(!req.body.nome || !req.body.cpf){
    return res.status(400).json({msg: "Verifique os dados pois nome e cpf são obrigatórios."});
  }
  const data = await alunoController.store(req.body);
  return res.status(201).json({ data });
});

export default router;
