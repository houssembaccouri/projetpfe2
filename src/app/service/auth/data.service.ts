import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  registerUser(data :any){
    return this.http.post(environment.apiUrl+'api/auth/register', data);
  }

  login(data?: any): Observable<any> {
    console.log(('ffffffff'))
    return this.http.post(environment.apiUrl+'api/auth/login',data);

  }
}
