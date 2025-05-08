import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMDBF1DriverComponent } from './mdb-f1-driver.component';

describe('AddMDBF1DriverComponent', () => {
  let component: AddMDBF1DriverComponent;
  let fixture: ComponentFixture<AddMDBF1DriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMDBF1DriverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMDBF1DriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
