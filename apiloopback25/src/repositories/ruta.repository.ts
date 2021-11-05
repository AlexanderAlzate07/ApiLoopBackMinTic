import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodatasourceDataSource} from '../datasources';
import {Ruta, RutaRelations} from '../models';

export class RutaRepository extends DefaultCrudRepository<
  Ruta,
  typeof Ruta.prototype.id,
  RutaRelations
> {
  constructor(
    @inject('datasources.mongodatasource') dataSource: MongodatasourceDataSource,
  ) {
    super(Ruta, dataSource);
  }
}
