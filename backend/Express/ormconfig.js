module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'docker',
  password: 'docker',
  database: 'test_database',
  synchronize: false, // アプリケーションを起動するたびにデータベーススキーマを自動作成するか
  logging: true, // ロギングが有効かどうか
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};
