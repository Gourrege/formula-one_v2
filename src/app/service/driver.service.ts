import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';
import {F1ApiResponse} from '../Interface/F1ApiResponse'

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private _siteURL = 'https://api.jolpi.ca/ergast/f1/2025/drivers/';

  constructor(private _http:HttpClient) {}

  getDriverDetails(): Observable<F1ApiResponse> {

    return this._http.get<F1ApiResponse>(this._siteURL)
      .pipe(
        tap(data => console.log('Driver data received: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    console.error('DriverApiService error:', err.message);
    return throwError(() => new Error(err.message));
  }
}
