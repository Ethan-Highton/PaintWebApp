import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { OneRoomComponent } from './one.room/one.room.component';
import { HomeComponent } from './home/home.component';
import { MultiroomComponent } from './multiroom/multiroom.component';

const appRoute: Routes = [
  {path: "", component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'one', component: OneRoomComponent},
  {path: 'multi', component: MultiroomComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OneRoomComponent,
    MultiroomComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
