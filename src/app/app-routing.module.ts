import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturaVentaNuevoComponent } from './factura-venta/factura-venta-nuevo/factura-venta-nuevo.component';
import { FacturaVentaComponent } from './factura-venta/factura-venta.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesAddComponent } from './clientes/clientes-add/clientes-add.component';

const routes: Routes = [
  { path: 'factura-venta-nuevo', component: FacturaVentaNuevoComponent },
  {path: 'factura-tabla', component: FacturaVentaComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes/add', component: ClientesAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
