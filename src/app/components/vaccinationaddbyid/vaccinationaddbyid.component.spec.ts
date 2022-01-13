import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationaddbyidComponent } from './vaccinationaddbyid.component';

describe('VaccinationaddbyidComponent', () => {
  let component: VaccinationaddbyidComponent;
  let fixture: ComponentFixture<VaccinationaddbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationaddbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationaddbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
