import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin, IUserResponse } from 'src/app/models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  login(): Observable<IUserResponse> {
    return this._http.get<IUserResponse>('user')
  }
}
