import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CardsdetailsComponent } from './cardsdetails/cardsdetails.component';
import{HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SliderComponent } from './slider/slider.component';
import { SubcardsComponent } from './subcards/subcards.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ColdcoffeeComponent } from './coldcoffee/coldcoffee.component';
import { ColdcoffeecardsComponent } from './coldcoffeecards/coldcoffeecards.component';
import { ColdcoffeedetailsComponent } from './coldcoffeedetails/coldcoffeedetails.component';
import { HotcoffeecardsComponent } from './hotcoffeecards/hotcoffeecards.component';
import { MojiticardsComponent } from './mojiticards/mojiticards.component';
import { MojitoComponent } from './mojito/mojito.component'

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardsdetailsComponent,
    NavbarComponent,
    BannerComponent,
    FaqComponent,
    FooterComponent,
    WelcomeComponent,
    SliderComponent,
    SubcardsComponent,
    ContactusComponent,
    ColdcoffeeComponent,
    ColdcoffeecardsComponent,
    ColdcoffeedetailsComponent,
    HotcoffeecardsComponent,
    MojiticardsComponent,
    MojitoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
