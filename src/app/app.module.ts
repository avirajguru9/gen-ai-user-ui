import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockHeaderComponent } from './stock-header/stock-header.component';
import { StockFooterComponent } from './stock-footer/stock-footer.component';
import { LogoutComponent } from './logout/logout.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    LineChartComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    StockListComponent,
    StockHeaderComponent,
    StockFooterComponent,
    LogoutComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
