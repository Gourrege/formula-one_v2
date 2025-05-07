import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { WikiApiResponse } from '../Interface/wiki-api-response';
@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private _http:HttpClient) { }
  getWikData(driverUrl:string) :Observable<WikiApiResponse>
  {
    const pageTitle = driverUrl.split('/').pop(); // Extracts "Lewis_Hamilton"
    const wikiApiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${pageTitle}`;
    
    return this._http.get<WikiApiResponse>(wikiApiUrl).pipe(
            tap(data => console.log()),
            catchError(this.handleError)
          );

  }
  private handleError(err: HttpErrorResponse): Observable<never> {
    console.error('Wiki error:', err.message);
    return throwError(() => new Error(err.message));
  }
}


//https://en.wikipedia.org/api/rest_v1/page/summary/Lewis_Hamilton