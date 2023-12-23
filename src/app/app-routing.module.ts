import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path : '',component:LoginComponent},//nothing maintioned then home page as login
  {path : 'login',component:LoginComponent},
  {path : 'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
  {path : 'home/:name',component:HomeComponent,canActivate:[RouteGuardService]},
  {path : 'user',component:UserComponent,canActivate:[RouteGuardService]},
  {path : 'stocklist',component:StockListComponent,canActivate:[RouteGuardService]},
  {path : '**',component:ErrorComponent},//if any other url then route to error component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

