import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface FacturaVenta {
  numero: string;
  cliente: string;
  creacion: string;
  vencimiento: string;
  total: number;
  cobrado: number;
  porCobrar: number;
  estadoDian: string;
  estado: string;
}

@Component({
  selector: 'app-factura-venta',
  templateUrl: './factura-venta.component.html',
  styleUrls: ['./factura-venta.component.css']
})
export class FacturaVentaComponent {
  rows: FacturaVenta[] = [];

  constructor(private router: Router) {
    // Add two initial rows to the table (example data)
    this.addRowWithData('001', 'John Doe', '2023-07-26', '2023-08-26', 100, 50, 50, 'Aprobado', 'Activo');
    this.addRowWithData('002', 'Jane Smith', '2023-07-25', '2023-08-25', 200, 100, 100, 'Pendiente', 'Inactivo');
  }

  navigateToNewPage(): void {
    // Replace 'new-page' with the route path of the new page you want to navigate to
    this.router.navigate(['factura-venta-nuevo']);
  }

  addRowWithData(
    numero: string,
    cliente: string,
    creacion: string,
    vencimiento: string,
    total: number,
    cobrado: number,
    porCobrar: number,
    estadoDian: string,
    estado: string
  ): void {
    const newRow: FacturaVenta = {
      numero: numero,
      cliente: cliente,
      creacion: creacion,
      vencimiento: vencimiento,
      total: total,
      cobrado: cobrado,
      porCobrar: porCobrar,
      estadoDian: estadoDian,
      estado: estado
    };
    this.rows.push(newRow);
  }
}
