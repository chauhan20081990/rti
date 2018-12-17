import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getUsers (page) :Observable<any> {
    return this.http.get<any>('https://randomuser.me/api/?results=5&exc=login&seed=rti&page=' + page);
  }
}
