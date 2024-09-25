import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteHcComponent } from './cliente-hc.component';

describe('ClienteHcComponent', () => {
  let component: ClienteHcComponent;
  let fixture: ComponentFixture<ClienteHcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteHcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteHcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
