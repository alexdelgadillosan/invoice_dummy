import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaVentaNuevoComponent } from './factura-venta-nuevo.component';

describe('FacturaVentaNuevoComponent', () => {
  let component: FacturaVentaNuevoComponent;
  let fixture: ComponentFixture<FacturaVentaNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaVentaNuevoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaVentaNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
