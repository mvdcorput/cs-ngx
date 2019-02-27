import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CsNgxModule } from 'projects/cs-ngx-npm/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CsNgxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
