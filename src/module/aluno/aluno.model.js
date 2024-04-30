const knex = require('../../service/knex');

const getAll = async () => {
  return knex('aluno').select();
  
};

const store = async (params) => {
  return knex('aluno').insert(params);
};

module.exports = {
  getAll,
  store,
};
