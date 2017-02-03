import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { TypeDataService } from './shared/type-data.service';
import { AppComponent } from './app.component';
import { TypeListComponent } from './type-list/type-list.component';
import { MatchupListComponent } from './matchup-list/matchup-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TypeListComponent,
    MatchupListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [TypeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
