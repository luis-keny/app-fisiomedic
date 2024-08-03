import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoPagosComponent } from './grafico-pagos.component';

describe('GraficoPagosComponent', () => {
  let component: GraficoPagosComponent;
  let fixture: ComponentFixture<GraficoPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficoPagosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
