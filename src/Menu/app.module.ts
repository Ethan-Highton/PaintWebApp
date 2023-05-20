import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AfterViewInit, ViewChild, ElementRef} from '@angular/core'

import { AppComponent } from './app.component';
import { OneRoomComponent } from './one.room/one.room.component';
import { HomeComponent } from './home/home.component';
import { MultiroomComponent } from './multiroom/multiroom.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { OtherComponent } from './other/other.component';

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
    MultiroomComponent,
    RectangleComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
