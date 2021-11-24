import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginDto} from './login.dto';
import {Observable, of} from 'rxjs';
import {TokenDto} from './token.dto';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  login(loginDto: LoginDto): Observable<TokenDto> {
    return this._http
      .post<TokenDto>(environment.api + '/api/auth/login', loginDto)
      .pipe(
        tap(token => {
          if(token && token.jwt) {
            localStorage.setItem('jwtToken', token.jwt);
          }
        })
      )
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }
}
