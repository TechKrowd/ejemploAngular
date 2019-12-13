import { RouterModule } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomeComponent],
  providers: [ LoginService ]
})

export class HomeModule {}
