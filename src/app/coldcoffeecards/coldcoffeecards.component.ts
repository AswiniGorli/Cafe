import { Component } from '@angular/core';
import { Cards } from '../models/cards';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-coldcoffeecards',
  templateUrl: './coldcoffeecards.component.html',
  styleUrls: ['./coldcoffeecards.component.css']
})
export class ColdcoffeecardsComponent {
  details:Cards[]=[];
  constructor(private service:UserService){}
ngOnInit():void
  {
    this.coldcoffee();
  }
  coldcoffee()
  {
    this.service.getDetails().subscribe(data=>this.details=data)
  }
}
