import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturaVentaNuevoComponent } from './factura-venta/factura-venta-nuevo/factura-venta-nuevo.component';
import { FacturaVentaComponent } from './factura-venta/factura-venta.component';

const routes: Routes = [
  { path: 'factura-venta-nuevo', component: FacturaVentaNuevoComponent },
  {path: 'factura-tabla', component: FacturaVentaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
