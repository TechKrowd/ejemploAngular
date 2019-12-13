import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [ HomeModule, LoginModule, UserModule ],
  exports: [HomeModule, LoginModule, UserModule],
  providers: []
})

export class PagesModule {}
