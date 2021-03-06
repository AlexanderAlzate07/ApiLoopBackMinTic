import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodatasourceDataSource} from '../datasources';
import {Servicio, ServicioRelations, Ruta} from '../models';
import {RutaRepository} from './ruta.repository';

export class ServicioRepository extends DefaultCrudRepository<
  Servicio,
  typeof Servicio.prototype.id,
  ServicioRelations
> {

  public readonly rutaFk: BelongsToAccessor<Ruta, typeof Servicio.prototype.id>;

  constructor(
    @inject('datasources.mongodatasource') dataSource: MongodatasourceDataSource, @repository.getter('RutaRepository') protected rutaRepositoryGetter: Getter<RutaRepository>,
  ) {
    super(Servicio, dataSource);
    this.rutaFk = this.createBelongsToAccessorFor('rutaFk', rutaRepositoryGetter,);
    this.registerInclusionResolver('rutaFk', this.rutaFk.inclusionResolver);
  }
}
