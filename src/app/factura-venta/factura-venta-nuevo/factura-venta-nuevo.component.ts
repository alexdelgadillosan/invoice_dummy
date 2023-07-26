import { Component } from '@angular/core';

@Component({
  selector: 'app-factura-venta-nuevo',
  templateUrl: './factura-venta-nuevo.component.html',
  styleUrls: ['./factura-venta-nuevo.component.css']
})
export class FacturaVentaNuevoComponent {
  rows: any[] = [];

  // Define the options for dropdowns (you can populate this from your data source)
  dropdownOptions: string[] = ['Option 1', 'Option 2', 'Option 3'];

  constructor() {
    // Add a new row with default values when the component is created
    this.addRow();
  }

  addRow(): void {
    // Add a new row with default values
    this.rows.push({
      column1: this.dropdownOptions[0],
      column2: '',
      column3: '',
      column4: '',
      column5: this.dropdownOptions[0],
      column6: '',
      column7: this.dropdownOptions[0],
    });
  }

  deleteRow(index: number): void {
    // Delete the row at the specified index
    this.rows.splice(index, 1);
  }

}
