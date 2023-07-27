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
  total: number = 0;

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
      column4: this.dropdownOptions[0],
      column5: '',
      column6: '',
      column7: 0, // Initialize column7 to 0 (as a number)
    });

    // Recalculate the total
    this.calculateTotal();
  }

  deleteRow(index: number): void {
    // Delete the row at the specified index
    this.rows.splice(index, 1);

    // Recalculate the total
    this.calculateTotal();
  }

  // Calculate the total value from column7 of all rows
  calculateTotal(): void {
    this.total = this.rows.reduce((sum, row) => {
      const column7Value = parseFloat(row.column7) || 0;
      const column6Value = parseFloat(row.column6) || 0;
      return sum + column7Value * column6Value;
    }, 0);
  }

  onColumnChange(): void {
    // Called whenever the values of column6 or column7 change
    this.calculateTotal();
  }
}
