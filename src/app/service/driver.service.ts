import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';
import {F1ApiResponse} from '../Interface/F1ApiResponse'

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private _baseURL = 'https://api.jolpi.ca/ergast/f1/';

  constructor(private _http:HttpClient) {}

  getDriverDetails(offset: number, limit: number, year: number): Observable<F1ApiResponse> {

    const url = `${this._baseURL}/${year}/drivers/?offset=${offset}&limit=${limit}`;

    return this._http.get<F1ApiResponse>(url)
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
