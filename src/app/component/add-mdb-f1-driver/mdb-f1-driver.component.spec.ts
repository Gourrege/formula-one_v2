import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDBF1DriverComponent } from './mdb-f1-driver.component';

describe('MDBF1DriverComponent', () => {
  let component: MDBF1DriverComponent;
  let fixture: ComponentFixture<MDBF1DriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MDBF1DriverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MDBF1DriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
