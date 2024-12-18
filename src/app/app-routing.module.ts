import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { CardsdetailsComponent } from './cardsdetails/cardsdetails.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ColdcoffeeComponent } from './coldcoffee/coldcoffee.component';
import { MojitoComponent } from './mojito/mojito.component';
import { HotcoffeecardsComponent } from './hotcoffeecards/hotcoffeecards.component';
const routes: Routes = [
  {
    path:'',component:WelcomeComponent
  },
  {
    path:'contactus',component:ContactusComponent
  },
  {
    path:'coldcoffee',component:ColdcoffeeComponent
  },
  {
    path:'mojito',component:MojitoComponent
  },
  {
    path:'hotcoffeecards',component:HotcoffeecardsComponent
  },
  {
    path:'card/:id',component:CardsdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
