import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDerscripcion } from 'src/app/models/productoCompleto';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


  producto: ProductoDerscripcion;
  id: string;

  constructor(private route: ActivatedRoute, public prosuctoService: ProductosService) { }

  ngOnInit() {

    this.route.params
      .subscribe(parametros => {
        console.log(parametros['id']);

        this.prosuctoService.getProducto(parametros['id'])
        .subscribe( (producto: ProductoDerscripcion) => {
          
          this.id = parametros['id'];
          this.producto = producto;
          console.log(this.producto);

        });

      });
  }

}
