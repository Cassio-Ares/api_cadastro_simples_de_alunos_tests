import { Knex } from 'knex';
import { KnexService }from '../../service/knex';


export class Aluno{
  private db: Knex;

  constructor(knexService: KnexService){
    this.db = knexService.conectar()
  }

  getAll = async () =>{
    return this.db('aluno').select();
  }

  store = async<T> (params:T) =>{
    return this.db('aluno').insert(params);
  }
}



// export const getAll = async () => {
//   return knex('aluno').select();
  
// };

// export const store = async (params:any) => {
//   return knex('aluno').insert(params);
// };

