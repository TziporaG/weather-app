import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatOptionModule } from '@angular/material/core';
import { MatCommonModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';

const routes: Routes = [
  {
    path: "",
    component: WeatherReportComponent
  },
  {
    path: ":locationName",
    component: WeatherReportComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    WeatherReportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatOptionModule,
    MatCommonModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
