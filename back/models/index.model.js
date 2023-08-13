import dbConfig from '../config/config.js';
import {Sequelize} from "sequelize";

/**
 * Sequelize initialization
 * @type {Sequelize}
 */
const sequelize = new Sequelize(
    dbConfig.db,
    dbConfig.user,
    dbConfig.password, {
        ...dbConfig,
        operatorsAliases: 0,
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db;
