import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MongodbService } from '../../service/mongodb.service';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { MongoF1Data } from '../../Interface/mongo-f1-data';
import { AddMDBF1DriverComponent } from '../add-mdb-f1-driver/mdb-f1-driver.component';
@Component({
  selector: 'app-delete-mdb-f1-driver',
  imports: [CommonModule],
  templateUrl: './delete-mdb-f1-driver.component.html',
  styleUrl: './delete-mdb-f1-driver.component.css'
})
export class DeleteMDBF1DriverComponent {

  @Input() f1DriverData?:MongoF1Data
  @Output() driverDeletedEvent = new EventEmitter<string>();
  driverImageWidth:number = 200


  constructor(private _mdbAPIService:MongodbService, private _addMDBF1DriverComponent:AddMDBF1DriverComponent)
  {

  }

  deleteDriver(f1DriverId:string) { 
    this._mdbAPIService.delF1DriverDetails(f1DriverId).subscribe(result =>
      { 
        console.log(result);
        this._addMDBF1DriverComponent.refreshDrivers();
      });

      this.driverDeletedEvent.emit("Driver Got Deleted");
  }



}
