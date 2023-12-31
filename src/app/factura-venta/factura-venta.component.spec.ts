import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaVentaComponent } from './factura-venta.component';

describe('FacturaVentaComponent', () => {
  let component: FacturaVentaComponent;
  let fixture: ComponentFixture<FacturaVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
