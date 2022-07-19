import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { AppError } from './common/app-error';
import { BadInput } from './common/bad-input';
import { NotFoundError } from './common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  url = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }
  
  getSupervisors() {
    return this.http.get<any[]>(this.url + "supervisors")
      .pipe(catchError(this.handleError));
  }

  postSupervisor(input: any) {

    let headers = new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8"
    });

    return this.http.post(this.url + "submit", input, {headers: headers})
      .pipe(catchError(this.handleError));
  }

 private handleError(error: HttpErrorResponse) {
    if (error.status === 400)
      return throwError(() => new BadInput(error));

    if (error.status === 404)
      return throwError(() => new NotFoundError(error));

    return throwError(() => new AppError(error));
 }
}
