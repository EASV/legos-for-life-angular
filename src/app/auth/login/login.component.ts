import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import {LoginDto} from '../shared/login.dto';
import {BehaviorSubject, Subscription} from 'rxjs';

@Component({
  selector: 'app-inno-tech-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm = this.fb.group({
    username: [''],
    password: ['']
  });
  private unsub: Subscription | undefined;
  constructor(private fb: FormBuilder,
              private _auth: AuthService) {
  }

  ngOnInit(): void {
    this.unsub = this._auth.isLoggedIn$.subscribe(token => {
      console.log('token', token);
    })
  }

  ngOnDestroy(): void {
    if(this.unsub) {
      this.unsub.unsubscribe();
    }
  }

  login() {
    const loginDto = this.loginForm.value as LoginDto;
    this._auth.login(loginDto)
      .subscribe(token => {
        //console.log('Token: ', token);
      });
  }


}
