import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FacturaVentaComponent } from './factura-venta/factura-venta.component';
import { FacturaVentaNuevoComponent } from './factura-venta/factura-venta-nuevo/factura-venta-nuevo.component';
import { FormsModule } from '@angular/forms';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesAddComponent } from './clientes/clientes-add/clientes-add.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    FacturaVentaComponent,
    FacturaVentaNuevoComponent,
    ClientesComponent,
    ClientesAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
