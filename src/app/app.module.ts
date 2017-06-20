import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


export const firebaseConfig = {
      apiKey: "AIzaSyDOypC4jUFWbpt973rkH9k8geIZBcE68IY",
      authDomain: "cursoonline-e9104.firebaseapp.com",
      databaseURL: "https://cursoonline-e9104.firebaseio.com",
      projectId: "cursoonline-e9104",
      storageBucket: "cursoonline-e9104.appspot.com",
      messagingSenderId: "184461736739"
};  

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }