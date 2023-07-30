import { Component } from '@angular/core';
import { Item } from 'src/app/models/item.interface';

@Component({
  selector: 'app-factura-venta-nuevo',
  templateUrl: './factura-venta-nuevo.component.html',
  styleUrls: ['./factura-venta-nuevo.component.css']
})
export class FacturaVentaNuevoComponent {
  rows: any[] = [];
  items: Item[] = []

  // Define the options for dropdowns (you can populate this from your data source)
  
  total: number = 0;

  constructor() {
    // Add a new row with default values when the component is created
    this.addRow();
    this.items.push({
      itemName: 'Activacion NIT',
      reference: 'Reference 1',
      price: 100,
      tax: 100,
      discount: 0,
      charge: 0,
      description: "desc1"
    });

    this.items.push({
      itemName: 'Volumen Documento Electronico',
      reference: 'Reference 2',
      price: 200,
      tax: 200,
      discount: 0,
      charge: 0,
      description: "desc2"
    });

    this.items.push({
      itemName: 'TEPRE',
      reference: 'Reference 3',
      price: 300,
      tax: 300,
      discount: 0,
      charge: 0,
      description: "desc3"
    });

  }

  addRow(): void {
    // Add a new row with default values
    this.rows.push({
      column1: '',
      column2: '', //reference
      column3: '0', //price
      column4: 0, //tax
      column5: '',//desc
      column6: '0',//dicscount
      column7: 1, // qty
      column8: '0',// total
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
      const column8Value = parseFloat(row.column8) || 0; // Use column8 for calculation
      return sum + column8Value;
    }, 0);
  }

  onColumnChange(): void {
    // Called whenever the values of any relevant column change
    this.rows.forEach((row, index) => {
      this.calculateRowTotal(index);
    });
  }

  getItemReference(itemName: string): string {
    // Find the item with the given itemName and return its reference
    const item = this.items.find((item) => item.itemName === itemName);
    return item ? item.reference : '';
  }
  getItemPrice(itemName: string): string {
    // Find the item with the given itemName and return its price as a string
    const item = this.items.find((item) => item.itemName === itemName);
    return item ? item.price.toString() : '';
  }

  getItemDescription(itemName: string): string {
    // Find the item with the given itemName and return its description
    const item = this.items.find((item) => item.itemName === itemName);
    return item ? item.description : '';
  }
  getItemTax(itemName: string): string {
    // Find the item with the given itemName and return its description
    const item = this.items.find((item) => item.itemName === itemName);
    return item ? item.tax.toString() : '';
  }
  calculateRowTotal(rowIndex: number): void {
    const row = this.rows[rowIndex];
    const price = parseFloat(row.column3) || 0;
    const quantity = parseFloat(row.column7) || 0;
    const discount = parseFloat(row.column6) || 0;
    const total = (price * quantity - discount).toFixed(2);
    // Set the calculated total in the corresponding row
    this.rows[rowIndex].column8 = total;
    // Recalculate the total for all rows
    this.calculateTotal();
  }
}
