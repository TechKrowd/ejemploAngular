import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private login: boolean;
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.login = false;
   }

  ngOnInit() {
    if ( this.loginService.getToken().length > 0) {
      this.login = true;
    } else {
      this.router.navigate (['/home']);
    }
  }

}
