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
  offset: number = 0;
  limit: number = 30;
  year: number = 1950;
  isLoading: boolean = false;

  constructor(private _driverService: DriverService) {}

  ngOnInit() {
    this.getDrivers();
  }

  getDrivers() {
    this.isLoading = true;
    this._driverService.getDriverDetails(this.offset, this.limit, this.year).subscribe(response => {
      const newDrivers = response.MRData.DriverTable.Drivers;
      this.driversData.push(...newDrivers);  // append new batch
      this.offset = this.offset + 30;  // move to next offset
      this.isLoading = false;
    });
  }



}
