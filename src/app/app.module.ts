import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AsistentesService } from './services/asistentes.service';
import { CreateAndUpdateComponent } from './components/create-and-update/create-and-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateAndUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AsistentesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
