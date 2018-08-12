import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstactComponent } from './constact.component';

describe('ConstactComponent', () => {
  let component: ConstactComponent;
  let fixture: ComponentFixture<ConstactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
