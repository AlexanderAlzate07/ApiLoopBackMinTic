import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodatasourceDataSource} from '../datasources';
import {Estacion, EstacionRelations} from '../models';

export class EstacionRepository extends DefaultCrudRepository<
  Estacion,
  typeof Estacion.prototype.id,
  EstacionRelations
> {
  constructor(
    @inject('datasources.mongodatasource') dataSource: MongodatasourceDataSource,
  ) {
    super(Estacion, dataSource);
  }
}
