import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverService } from '../../service/driver.service';
import { Driver } from '../../Interface/F1ApiResponse';


@Component({
  selector: 'app-driverlist',
  imports: [CommonModule],
  templateUrl: './driver-list.component.html',
  styleUrl: './driver-list.component.css'
})
export class DriverListComponent {

  driversData: Driver[] = [];
  show: boolean = false;

  constructor(private _driverService: DriverService) {}

  ngOnInit() {
    this.getDrivers();
  }

  getDrivers() {
    this._driverService.getDriverDetails().subscribe(response => {
      this.driversData = response.MRData.DriverTable.Drivers;
    });
  }
}
