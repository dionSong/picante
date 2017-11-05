//Services
import { ChilisService } from "./services/chilis.service";
import { Http } from "@angular/http";

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared.module';
import { HttpModule } from "@angular/http";


// Personal Components
import { SingleComponent } from './components/single/single.component';
import { ChilisComponent} from './components/chilis/chilis.component'


@NgModule({
  declarations: [
    AppComponent,
    SingleComponent,
    ChilisComponent
    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpModule
  ],
  providers: [ChilisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
