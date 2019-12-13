import { ResponseLogin } from './../model/responseLogin';
import { EndPoints } from './../endpoints.component';
import { LoginForm } from './../model/loginForm';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class LoginService {

  private token: string;
  private token$;

  constructor(
    private httpClient: HttpClient
  ) {
    this.token = '';
    this.token$ = new Subject<string>();
  }

  public getData(): Observable<string> {
    return this.token$;
  }

  public getToken(): string {
    return this.token;
  }

  public setToken(value: string): void {
    this.token = value;
  }

  sendLogin(loginModel: LoginForm) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    this.httpClient.post(EndPoints.POST_LOGIN, JSON.stringify(loginModel), httpOptions).subscribe(
      (response: ResponseLogin) => {
        console.log(response.token);
        this.token = response.token;
        this.token$.next(this.token);
      },
      error => {
        console.log('**** ERROR: ' + error.status);
      }
    );
  }
}
