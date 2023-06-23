import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePieChartComponent } from './employee-pie-chart.component';

describe('EmployeePieChartComponent', () => {
  let component: EmployeePieChartComponent;
  let fixture: ComponentFixture<EmployeePieChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeePieChartComponent]
    });
    fixture = TestBed.createComponent(EmployeePieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
