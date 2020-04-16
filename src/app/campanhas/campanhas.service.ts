import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Campanha } from './campanha';
import { CampanhaEmpresa } from './campanhaEmpresa';
import { CampanhaTipo } from './campanhaTipo';
import { CampanhaMaterial } from './campanhaMaterial';
import { CampanhaNd } from './campanhaNd';
import { CampanhaModelo } from './campanhaModelo';

import { CampanhaModel } from './campanha.model';
import { CampanhaEmpresaModel } from './campanhaEmpresa.model';
import { CampanhaTipoModel } from './campanhaTipo.model';
import { CampanhaModeloModel } from './campanhaModelo.model';
import { CampanhaMaterialModel } from './campanhaMaterial.model';
import { CampanhaNdModel } from './campanhaNd.model';

import { map } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampanhasService {
  constructor(private http: HttpClient) {}

  //campanhas
  getCampanhas() {
    return this.http.get('/api/campanha');
  }

  createCampanha(campanha: CampanhaModel) {
    return this.http.post('/api/campanha', campanha);
  }

  getCampanhaById(id: string) {
    //return this.http.get<Campanha>('/api/campanha' + '/' + id);
    return this.http
      .get<Campanha[]>('/api/campanha', {
        params: { id }
      })
      .pipe(map(data => ({ campanha: data['campanha'][0] })));
  }

  findCampanha(dict) {
    return this.http.get<Campanha[]>('/api/campanha', {
      params: dict
    });
  }

  deleteCampanha(id: string) {
    return this.http.delete('/api/campanha' + '/' + id);
  }

  //campanha material

  getCampanhasMaterial() {
    return this.http.get('/api/campanha_material');
  }
  getCampanhaMaterialById(id: string) {
    //return this.http.get<Campanha>('/api/campanha' + '/' + id);
    return this.http
      .get<CampanhaMaterial[]>('/api/campanha_material', {
        params: { id }
      })
      .pipe(map(data => ({ campanha: data['campanha_material'][0] })));
  }

  findCampanhaMaterial(dict) {
    return this.http.get<CampanhaModelo[]>('/api/campanha_material', {
      params: dict
    });
  }

  //campanha nd

  getCampanhasNd() {
    return this.http.get('/api/campanha_nd');
  }

  getCampanhaNdById(id: string) {
    //return this.http.get<Campanha>('/api/campanha' + '/' + id);
    return this.http
      .get<CampanhaNd[]>('/api/campanha_nd', {
        params: { id }
      })
      .pipe(map(data => ({ campanha: data['campanha_nd'][0] })));
  }

  findCampanhaNd(dict) {
    return this.http.get<CampanhaNd[]>('/api/campanha_nd', {
      params: dict
    });
  }

  //campanha tipo

  getCampanhasTipo() {
    return this.http.get('/api/campanha_tipo');
  }

  getCampanhaTipoById(id: string) {
    //return this.http.get<Campanha>('/api/campanha' + '/' + id);
    return this.http
      .get<CampanhaTipo[]>('/api/campanha_tipo', {
        params: { id }
      })
      .pipe(map(data => ({ campanha: data['campanha_tipo'][0] })));
  }

  findCampanhaTipo(dict) {
    return this.http.get<CampanhaTipo[]>('/api/campanha_tipo', {
      params: dict
    });
  }

  //campanha modelo

  getCampanhasModelo() {
    return this.http.get('/api/campanha_modelo');
  }

  getCampanhaModeloById(id: string) {
    //return this.http.get<Campanha>('/api/campanha' + '/' + id);
    return this.http
      .get<CampanhaModelo[]>('/api/campanha_modelo', {
        params: { id }
      })
      .pipe(map(data => ({ campanha: data['campanha_modelo'][0] })));
  }

  findCampanhaModelo(dict) {
    return this.http.get<CampanhaModelo[]>('/api/campanha_modelo', {
      params: dict
    });
  }

  //campanha empresa

  getCampanhasEmpresa() {
    return this.http.get('/api/campanha_empresa');
  }

  getCampanhaEmpresaById(id: string) {
    //return this.http.get<Campanha>('/api/campanha' + '/' + id);
    return this.http
      .get<CampanhaEmpresa[]>('/api/campanha_empresa', {
        params: { id }
      })
      .pipe(map(data => ({ campanha: data['campanha_empresa'][0] })));
  }

  findCampanhaEmpresa(dict) {
    return this.http.get<CampanhaEmpresa[]>('/api/campanha_empresa', {
      params: dict
    });
  }
}
