import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table'  
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { MatTableDataSource } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// import {MatTableModule} from '@angular/material'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    HttpClientModule,

    BrowserAnimationsModule,
     ServiceWorkerModule.register('ngsw-worker.js', {
       enabled: environment.production,
       // Register the ServiceWorker as soon as the application is stable
       // or after 30 seconds (whichever comes first).
       registrationStrategy: 'registerWhenStable:30000'
     })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
