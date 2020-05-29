module.exports = {
  name: 'boilerplate',
  port: 3344,
  allowedOrigins: [],
  mysql: {
    host: 'localhost',
    user: 'hello',
    password: '',
    db: 'boilerplate',
    dialect: 'postgres',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
