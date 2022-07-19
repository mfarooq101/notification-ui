import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotifyService } from './notify.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NotifyFormComponent } from './notify-form/notify-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NotifyFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [NotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
