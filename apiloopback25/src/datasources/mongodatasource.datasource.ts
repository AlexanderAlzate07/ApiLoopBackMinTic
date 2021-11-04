import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mongodatasource',
  connector: 'mongodb',
  url: 'mongodb+srv://AlexanderAlzateZapata:FogekA_87@misiontic.pno2o.mongodb.net/test',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongodatasourceDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongodatasource';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongodatasource', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
