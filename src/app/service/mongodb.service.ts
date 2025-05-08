import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError,tap } from 'rxjs';
import { MongoF1Data } from '../Interface/mongo-f1-data';

@Injectable({
  providedIn: 'root'
})
export class MongodbService {

  private _siteURL="http://localhost:5050/f1"

  constructor(private _http:HttpClient) 
  {

  }
  //hello world

  getF1DriverDetails():Observable<any> {

    return this._http.get<MongoF1Data>(this._siteURL)
    .pipe(
      tap(data => console.log('f1 data/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }


  addF1DriverDetails(f1Driver:MongoF1Data):Observable<any> {
   return this._http.post<MongoF1Data>(this._siteURL, f1Driver)
   .pipe(
    tap(data => console.log('add car message/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
   }


  delF1DriverDetails(driverId:string):Observable<any> {
    let deleteURL=this._siteURL+"/"+driverId;
    return this._http.delete(deleteURL)
    .pipe(
      tap(data => console.log('del car message/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
 
  }

  private handleError (err:HttpErrorResponse) {
    console.log('CarApiService: ' + err.message);
    return err.message;
  }


}
