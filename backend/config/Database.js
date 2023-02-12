import { Sequelize } from "sequelize";
 
const db = new Sequelize('zoo_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;
