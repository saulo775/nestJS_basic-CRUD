const ormConfig = {
  database: './db.sql',
  type: 'sqlite',
  sinchronize: true,
  entities: ['dist/**/*.model.js'],
};
