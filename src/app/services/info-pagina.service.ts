import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../models/info-pagina';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {
    this.carfarInfo();
    this.cargarEquipo();
  }

  private carfarInfo() {
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {

        this.cargada = true;
        this.info = resp;
      })
  }

  private cargarEquipo() {
    this.http.get('https://trabajos-prueba.firebaseio.com/equipo.json')
      .subscribe((resp: any[]) => {

        this.equipo = resp;
      })
  }
}
