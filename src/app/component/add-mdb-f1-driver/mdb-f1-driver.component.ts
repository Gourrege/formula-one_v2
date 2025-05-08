import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MongoF1Data, New_F1_Driver } from '../../Interface/mongo-f1-data';
import { MongodbService } from '../../service/mongodb.service';
import { DeleteMDBF1DriverComponent } from '../delete-mdb-f1-driver/delete-mdb-f1-driver.component';

@Component({
  selector: 'app-mdb-f1-driver',
  imports: [CommonModule, DeleteMDBF1DriverComponent],
  templateUrl: './mdb-f1-driver.component.html',
  styleUrl: './mdb-f1-driver.component.css'
})

export class AddMDBF1DriverComponent {

  f1DriversData: MongoF1Data | any
  show: boolean = false

  constructor(private _mdbAPIService:MongodbService)
  {
  }

  ngOnInit() {
    this.getMDB_Drivers()
  }

  getMDB_Drivers() {
    this._mdbAPIService.getF1DriverDetails().subscribe(f1DriverData =>
      { this.f1DriversData = f1DriverData
    });
  }

  addF1_Driver(firstName:string,lastName:string,Team:string,Number:string,Code:string,imageURL:string):boolean {
    let addF1Driver:MongoF1Data;
    addF1Driver= new New_F1_Driver(firstName,lastName,Team,Number,Code,imageURL);
    this._mdbAPIService.addF1DriverDetails(addF1Driver).subscribe(f1DriverData =>
      { this.f1DriversData = f1DriverData}
    );

    this.getMDB_Drivers()

    return false;
  }

  refreshDrivers()
  {
    this.getMDB_Drivers();

  }


}
