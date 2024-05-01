import knex, { Knex } from "knex";
import knexConfig from "../config/knex";

export class KnexService{
  private static conn:Knex;

  conectar = ()=>{
    if(!KnexService.conn){
      KnexService.conn = knex(knexConfig);
    }

    return KnexService.conn;
  }
}



// import knex, { Knex } from 'knex';
// import knexConfig from '../config/knex'

// let conn:Knex;

// function conectar() {
//   if (conn) {
//     return conn;
//   }

//   conn = knex(knexConfig);
//   return conn;
// }

// export default conectar();
