import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-factura-venta',
  templateUrl: './factura-venta.component.html',
  styleUrls: ['./factura-venta.component.css']
})
export class FacturaVentaComponent {
  constructor(private router: Router){

  }

  navigateToNewPage(): void {
    // Replace 'new-page' with the route path of the new page you want to navigate to
    this.router.navigate(['factura-venta-nuevo']);
  }
}
