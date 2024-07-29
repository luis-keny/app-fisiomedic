import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoDiagnosticoComponent } from './grupo-diagnostico.component';

describe('GrupoDiagnosticoComponent', () => {
  let component: GrupoDiagnosticoComponent;
  let fixture: ComponentFixture<GrupoDiagnosticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrupoDiagnosticoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrupoDiagnosticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
