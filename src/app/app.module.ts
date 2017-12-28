import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { homeComponent } from './home/home.component';
import { aboutComponent } from './about-us/about.component';
import { routing } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,homeComponent,aboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent,homeComponent,aboutComponent]
})
export class AppModule { }
