const {database1: dbConfig} = require('../../config/db.config');
const path = require('path');
const fs = require('fs');
const basename = path.basename(module.filename);

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    }
});

const db = {};


db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.tutorials = require('./tutorial.model')(sequelize, Sequelize);
fs.readdirSync(__dirname)
    .filter(file =>
        (file.indexOf('.') !== 0) &&
        (file !== basename) &&
        (file.slice(-3) === '.js'))
    .forEach(file => {
    db[path.basename(file).split('.model')[0]] = require(path.resolve(__dirname, file))(sequelize, Sequelize);

    // const model = db.Database1.import(path.resolve(__dirname, 'database1', file));
    // db[model.name] = model;
});

module.exports = db;