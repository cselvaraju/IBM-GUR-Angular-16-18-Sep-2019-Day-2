// Module Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MymaterialModule } from './mymaterial/mymaterial.module';
import { FormsModule } from '@angular/forms';

// Component Imports
import { AppComponent } from './app.component';
import { ActorlistComponent } from './components/actorlist/actorlist.component';

// Service Imports

@NgModule({
  declarations: [
    AppComponent,
    ActorlistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MymaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
