import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafoleoComponent } from './portafoleo.component';

describe('PortafoleoComponent', () => {
  let component: PortafoleoComponent;
  let fixture: ComponentFixture<PortafoleoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortafoleoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafoleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
