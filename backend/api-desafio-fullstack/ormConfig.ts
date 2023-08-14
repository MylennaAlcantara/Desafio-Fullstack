import { DataSourceOptions } from "typeorm";

export const ormConfig: DataSourceOptions = {
    "database": "desafio", //blpvdpisjtnfbb6c13jk", // "crud_carro",
    "host": "localhost", //"blpvdpisjtnfbb6c13jk-mysql.services.clever-cloud.com", // "localhost",
    "type": "mysql",
    "port": 3306,
    "username": "g3_informatica", //"uzozut4jzpeqdwkk",//"g3_informatica",
    "password": "#g31nf#",//"4t5mhh2G05ssbNkCm08f", //"#g31nf#"
    "synchronize": true,
    "entities": ["dist/**/*.model.js"]
}