import * as dotenv from "dotenv";

dotenv.config()

export default {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST || 'testednc',
      port: 3306,
      user: process.env.DB_USER || 'user',
      password: process.env.DB_PASS || 'password',
      database: process.env.DB_NAME || "alunos",
    },
  };
  
  