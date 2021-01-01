import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '@sharedPages/header/header.component';
import { HomeComponent } from '@sharedPages/home/home.component';
import { SearchbarComponent } from '@sharedPages/searchbar/searchbar.component';
import { FooterComponent } from '@sharedPages/footer/footer.component';
// import { OwlModule,   } from 'ngx-owl-carousel';  
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // OwlModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
