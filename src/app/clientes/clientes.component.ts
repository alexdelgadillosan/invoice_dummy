import { Component } from '@angular/core';

interface RowData {
  nombre: string;
  identificacion: string;
  telefono: string;
  isEditMode?: boolean;
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  rows: RowData[] = [];

  constructor() {
    // Add an initial row to the table
    this.addRowWithData('John Doe', '123456789', '555-1234');
    this.addRowWithData('Jane Smith', '987654321', '555-5678');
  }

  deleteRow(rowIndex: number): void {
    this.rows.splice(rowIndex, 1);
  }
  addRowWithData(nombre: string, identificacion: string, telefono: string): void {
    const newRow: RowData = {
      nombre: nombre,
      identificacion: identificacion,
      telefono: telefono,
      isEditMode: false
    };
    this.rows.push(newRow);
  }
  addRow(): void {
    const newRow: RowData = {
      nombre: '',
      identificacion: '',
      telefono: '',
      isEditMode: false
    };
    this.rows.push(newRow);
  }

  editRow(rowIndex: number): void {
    this.rows[rowIndex].isEditMode = true;
  }

  saveRow(rowIndex: number): void {
    this.rows[rowIndex].isEditMode = false;
  }
}
