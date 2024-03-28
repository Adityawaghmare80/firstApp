import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './shared/components/student/student.component';
import { ProductComponent } from './shared/components/product/product.component';
import { ServiceComponent } from './shared/components/serivice/service.component';
import { CountrytComponent } from './shared/components/country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ProductComponent,
    ServiceComponent,
    CountrytComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
