import { Component, inject, OnInit } from '@angular/core';
import { CarritoService } from '../../../core/services/carrito';
import { Carrito } from '../../../core/modelo/carrito';

@Component({
  selector: 'app-carrito-listar',
  imports: [],
  templateUrl: './carrito-listar.html',
  styleUrl: './carrito-listar.css',
})
export class CarritoListar implements OnInit {
  private carritoService = inject(CarritoService);
  listCarrito: Carrito[] = [];

  ngOnInit(): void {
    this.listCarrito;
  }

  getListCarrito() {
    this.listCarrito = this.carritoService.getCarrito();
  }
}
