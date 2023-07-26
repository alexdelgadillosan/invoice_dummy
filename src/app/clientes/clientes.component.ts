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
    this.addRow();
  }

  deleteRow(rowIndex: number): void {
    this.rows.splice(rowIndex, 1);
  }

  addRow(): void {
    const newRow: RowData = {
      nombre: 'New Name',
      identificacion: 'New ID',
      telefono: 'New Phone',
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
