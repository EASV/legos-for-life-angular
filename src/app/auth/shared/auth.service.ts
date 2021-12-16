import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginDto} from './login.dto';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {TokenDto} from './token.dto';
import {environment} from '../../../environments/environment';
import {take, tap} from 'rxjs/operators';
import {AuthUserDto} from './auth-user.dto';

const jwtToken = 'jwtToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn$ = new BehaviorSubject<string | null>(this.getToken());
  constructor(private _http: HttpClient) { }

  login(loginDto: LoginDto): Observable<TokenDto> {
    return this._http
      .post<TokenDto>(environment.api + '/api/auth/login', loginDto)
      .pipe(
        tap(token => {
          if(token && token.jwt) {
            localStorage.setItem(jwtToken, token.jwt);
            this.isLoggedIn$.next(token.jwt);
          } else {
            this.logout();
          }
        })
      )
  }

  getToken(): string | null {
    return localStorage.getItem(jwtToken);
  }

  logout(): Observable<boolean> {
    localStorage.removeItem(jwtToken);
    this.isLoggedIn$.next(null);
    return of(true).pipe(take(1));
  }

  createAuthUser(userDto: AuthUserDto): Observable<AuthUserDto> {
    return this._http.post<AuthUserDto>(environment.api + '/api/auth/create', userDto);
  }
}
