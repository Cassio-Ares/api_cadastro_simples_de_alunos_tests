const express = require('express');
const alunoModel = require('./aluno.model');

const router = express.Router();

router.get('/', async (_, res) => {
  const data = await alunoModel.getAll();
  return res.status(200).json({ data });
});

router.post('/', async (req, res) => {
  const data = await alunoModel.store(req.body);
  return res.status(200).json({ data });
});

module.exports = router;
