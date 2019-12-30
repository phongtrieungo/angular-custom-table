import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SagDatatableComponent } from './sag-datatable.component';

describe('SagDatatableComponent', () => {
  let component: SagDatatableComponent;
  let fixture: ComponentFixture<SagDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SagDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SagDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
