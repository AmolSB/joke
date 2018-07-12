import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule } from '@angular/material'
import { AppComponent } from './app.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeComponent } from 'src/app/joke/joke.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeListComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
