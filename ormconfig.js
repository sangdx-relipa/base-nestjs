const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  type: 'mysql',
  host: process.env['MYSQL_HOST'] || 'localhost',
  port: parseInt(process.env['MYSQL_PORT'] || '', 10),
  username: process.env['MYSQL_USER'] || 'mysql',
  password: process.env['MYSQL_PASS'] || 'mysql',
  database: process.env['MYSQL_DB'] || 'mysql',
  synchronize: false,
  logging: false,
  entities: ['src/**/*.entity.ts'], //src/**/*.entity.ts nodemon
  migrations: [__dirname + '/dist/src/migration/*.js'],
  subscribers: [__dirname + '/dist/subscriber/**/*.js'],
  cli: {
    entitiesDir: 'src/**/*.entity{.ts,.js}',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};
