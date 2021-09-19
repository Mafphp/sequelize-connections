module.exports = {
    database1: {
        HOST: 'localhost',
        USER: 'postgres',
        PORT: '55320',
        PASSWORD: '1',
        DB: 'test',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
    database2: {
        HOST: 'localhost',
        USER: 'postgres',
        PORT: '55321',
        PASSWORD: '1',
        DB: 'test',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
}