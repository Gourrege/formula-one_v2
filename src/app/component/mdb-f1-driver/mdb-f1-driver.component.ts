import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MongoF1Data, New_F1_Driver } from '../../Interface/mongo-f1-data';
import { MongodbService } from '../../service/mongodb.service';

@Component({
  selector: 'app-mdb-f1-driver',
  imports: [CommonModule],
  templateUrl: './mdb-f1-driver.component.html',
  styleUrl: './mdb-f1-driver.component.css'
})

export class MDBF1DriverComponent {

  f1DriverData: MongoF1Data | any
  show: boolean = false

  constructor(private _mdbAPIService:MongodbService)
  {
  }

  ngOnInit() {
    this.getMDB_Drivers()
  }

  getMDB_Drivers() {
    this._carAPIService.getDetails().subscribe(carsData =>
      { this.carsData = carsData
    });
  }

  addCar(make:string, model:string, year:string,imageUrl:string):boolean {
    let addCar:Car;
    addCar=new NewCar(make,model,year,imageUrl);
    this._carAPIService.addCarDetails(addCar).subscribe(carsData =>
      { this.carsData = carsData}
    );

    this.getCars()

    return false;
  }

  refreshCars()
  {
    this.getCars();

  }


}
