import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMDBF1DriverComponent } from './delete-mdb-f1-driver.component';

describe('DeleteMDBF1DriverComponent', () => {
  let component: DeleteMDBF1DriverComponent;
  let fixture: ComponentFixture<DeleteMDBF1DriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteMDBF1DriverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteMDBF1DriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
