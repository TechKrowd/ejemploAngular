import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/model/loginForm';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginModel: LoginForm;
  private token;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginModel = new LoginForm();
   }

  ngOnInit() {
    this.loginService.getData().subscribe(
      response => {
        alert(response);
        this.router.navigate(['/home/user']);
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(f: NgForm){
    //console.log(JSON.stringify(this.loginModel));
    this.loginService.sendLogin(this.loginModel);

  }

}
