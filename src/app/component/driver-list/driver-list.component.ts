import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverService } from '../../service/driver.service';
import { Driver } from '../../Interface/F1ApiResponse';
import { WikiApiResponse } from '../../Interface/wiki-api-response';
import { WikiService } from '../../service/wiki.service';

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
  wikiData: WikiApiResponse|any;
  driverCol:string|any;
  constructor(private _driverService: DriverService, private _wikiservice:WikiService) {}

  ngOnInit() {
    this.getDrivers();
  }

  getWikiSummary(driverUrl: string, id:string)
  {
    this.driverCol = id;
    this._wikiservice.getWikData(driverUrl).subscribe(response => {
      this.wikiData = response;
      console.log('Other Data'+response)
      console.log('Images'+JSON.stringify(response.originalimage.source))
    })

    
  }


  onYearSubmit(inputYear: string) {
    const parsedYear = parseInt(inputYear, 10);
  
    if (isNaN(parsedYear) || parsedYear < 1950 || parsedYear > new Date().getFullYear()) {
      console.error('Invalid year');
      return;
    }
  
    this.year = parsedYear;
    this.offset = 0;
    this.driversData = [];
    this.getDrivers();
  }

  getDrivers() {
    this.isLoading = true;
    this._driverService.getDriverDetails(this.offset, this.limit, this.year).subscribe(response => {
      const newDrivers = response.MRData.DriverTable.Drivers;

      // newDrivers.forEach(driver => {
      //   this.getWikiSummary(driver.url);  // Auto-fetch summary
      // });

      this.driversData.push(...newDrivers);  // append new batch
      this.offset = this.offset + 30;  // move to next offset
      this.isLoading = false;
    });
  }



}
