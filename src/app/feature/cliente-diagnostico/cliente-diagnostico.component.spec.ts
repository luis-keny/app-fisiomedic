import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDiagnosticoComponent } from './cliente-diagnostico.component';

describe('ClienteDiagnosticoComponent', () => {
  let component: ClienteDiagnosticoComponent;
  let fixture: ComponentFixture<ClienteDiagnosticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteDiagnosticoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteDiagnosticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
