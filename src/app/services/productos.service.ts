import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto';
import { timeout } from 'q';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor( private http: HttpClient ) {
    this.carcarProductos();
   }

  private carcarProductos() {
    this.http.get('https://trabajos-prueba.firebaseio.com/productos_idx.json')
    .subscribe((resp: Producto[]) => {

      console.log(resp);
      this.productos = resp;
      
      setTimeout(() => {
        this.cargando = false;
        
      }, 1000)
    });
  }

  getProducto(id: string) {
    return this.http.get(`https://trabajos-prueba.firebaseio.com/productos/${ id }.json`);
  }
}
