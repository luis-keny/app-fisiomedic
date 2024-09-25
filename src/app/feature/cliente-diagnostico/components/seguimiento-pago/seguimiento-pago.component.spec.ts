import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoPagoComponent } from './seguimiento-pago.component';

describe('SeguimientoPagoComponent', () => {
  let component: SeguimientoPagoComponent;
  let fixture: ComponentFixture<SeguimientoPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeguimientoPagoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguimientoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
