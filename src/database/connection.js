import { Sequelize } from 'sequelize';
import {config} from '../config/env.js'
 export const sequelize = new Sequelize(config.db.name,config.db.user,config.db.password,{
     host: config.db.host,
     dialect: config.db.dialect,
     }


 )
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
//const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
// });// Option 3: Passing parameters separately (other dialects)