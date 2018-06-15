import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Router,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { PgcomComponent } from './pgcom/pgcom.component';
import { PgserService } from './services/pgser.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { SerchpipePipe } from './pipes/serchpipe.pipe';

const approuting=[
  {path:'countrylist',component:PgcomComponent}  
  ]


@NgModule({
  declarations: [
    AppComponent,
    PgcomComponent,
    SerchpipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
    RouterModule.forRoot(approuting)
  ],
  providers: [PgserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
