import { Component, inject, OnInit } from '@angular/core';
import { ProductoService } from '../../../core/services/producto-service';
import { CarritoService } from '../../../core/services/carrito';
import { log } from 'console';
import { Producto } from '../../../core/modelo/producto';

@Component({
  selector: 'app-catalogo-inicio',
  imports: [],
  templateUrl: './catalogo-inicio.html',
  styleUrl: './catalogo-inicio.css',
})
export class CatalogoInicio implements OnInit {
  private productoService = inject(ProductoService);
  private carritoService = inject(CarritoService);
  productos: Producto[] = [];

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.productoService.getProducts().subscribe({
      next: (data) => {
        this.productos = data;
        console.log(this.productos);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  agregarProducto(item: Producto) {
    this.carritoService.agregar(item);
  }
}
