import { Injectable, provideBrowserGlobalErrorListeners } from '@angular/core';
import { Producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private listCarrito: CarritoService[] = [];
  producto: any;
  cantidad!: number;

  getCarrito() {
    return this.listCarrito;
  }

  agregar(producto: Producto, cantidad: number = 1) {
    const index = this.listCarrito.findIndex(
      (item) => item.producto.id === producto.id
    );
  }

  actualizar(index: number, cantidad: number) {
    if (index >= 0 && index < this.listCarrito.length) {
      this.listCarrito[index].cantidad = cantidad;
    }
  }
}
