import { DataSourceOptions, DataSource } from 'typeorm';
import * as config from 'config';

const dbConfig = config.get('db');
console.log(__dirname);
export const typeOrmConfig: DataSourceOptions = {
  type: process.env.RDS_TYPE || dbConfig.type,
  host: process.env.RDS_HOSTNAME || dbConfig.host,
  port: process.env.RDS_PORT || dbConfig.port,
  username: process.env.RDS_USERNAME || dbConfig.username,
  password: process.env.RDS_PASSWORD || dbConfig.password,
  database: process.env.RDS_DB_NAME || dbConfig.database,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize,
  migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
  migrationsRun: true,
  logging: true,
  logger: 'advanced-console',
};

const dataSource = new DataSource(typeOrmConfig);

export default dataSource;
