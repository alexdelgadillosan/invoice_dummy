// factura-venta-nuevo.component.ts
import { Component } from '@angular/core';
import { Item } from 'src/app/models/item.interface';

@Component({
  selector: 'app-factura-venta-nuevo',
  templateUrl: './factura-venta-nuevo.component.html',
  styleUrls: ['./factura-venta-nuevo.component.css']
})
export class FacturaVentaNuevoComponent {
  rows: any[] = [];
  items: Item[] = [];

  subtotal: number = 0;
  total: number = 0;
  iva: number = 0;
  inc: number = 0;
  discount: number = 0;

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
      description: 'desc1'
    });

    this.items.push({
      itemName: 'Volumen Documento Electronico',
      reference: 'Reference 2',
      price: 200,
      tax: 200,
      discount: 0,
      charge: 0,
      description: 'desc2'
    });

    this.items.push({
      itemName: 'TEPRE',
      reference: 'Reference 3',
      price: 300,
      tax: 300,
      discount: 0,
      charge: 0,
      description: 'desc3'
    });
  }

  calculateTotals(): void {
    console.log('Starting calculateTotals()');
    this.subtotal = this.rows.reduce((sum, row) => {
      const price = parseFloat(row.column3) || 0;
      const quantity = parseFloat(row.column7) || 0;
      const discount = parseFloat(row.column6) || 0;
      const total = (price * quantity - discount).toFixed(2);
      row.column8 = total;
      console.log('Calculating subtotal:', sum + parseFloat(total));
      return sum + parseFloat(total) || 0;
    }, 0);
  
    this.discount = this.rows.reduce((sum, row) => {
      return sum + parseFloat(row.column6) || 0;
    }, 0);
  
    // Add the tax value from each row to the total value
    this.iva = this.rows.reduce((sum, row) => {
      const tax = parseFloat(this.getItemTax(row.column1)) || 0;
      return sum + tax;
    }, 0);
  
    console.log('Tax:', this.iva);
    this.total = this.subtotal + this.iva;
    console.log('Total:', this.total);
  }

  addRow(): void {
    // Add a new row with default values
    this.rows.push({
      column1: '',
      column2: '',
      column3: '0',
      column4: 0,
      column5: '',
      column6: '0',
      column7: 0,
      column8: '0',
    });
    this.calculateTotals();
  }

  deleteRow(index: number): void {
    // Delete the row at the specified index
    this.rows.splice(index, 1);

    // Recalculate the totals
    this.calculateTotals();
  }

  onColumnChange(): void {
    // Called whenever the values of any relevant column change
    this.rows.forEach((row, index) => {
      this.calculateRowTotal(index);
    });

    // Recalculate the totals
    this.calculateTotals();
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
    const itemName = row.column1; // Get the selected item name

    // Find the item with the given itemName
    const item = this.items.find((item) => item.itemName === itemName);

    // If the item is found, extract the price, quantity, and discount
    const price = item ? item.price : 0;
    const quantity = parseFloat(row.column7) || 0;
    const discount = parseFloat(row.column6) || 0;

    // Calculate the total and set it in the corresponding row
    const total = (price * quantity - discount).toFixed(2);
    row.column3 = item ? item.price.toString() : 0;
    row.column8 = total;

    // Recalculate the totals
    this.calculateTotals();
  }
}
