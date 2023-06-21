import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { DigitcountPipe } from './digitcount.pipe';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    MobilesComponent,
    EmployeeComponent,
    DirectiveDemoComponent,
    HighlightDirective,
    PipeDemoComponent,
    DigitcountPipe,
    HomeComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
