import { Component } from '@angular/core';
import { Cards } from '../models/cards';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-hotcoffeecards',
  templateUrl: './hotcoffeecards.component.html',
  styleUrls: ['./hotcoffeecards.component.css']
})
export class HotcoffeecardsComponent {
details:Cards[]=[]

constructor(private service:UserService){}

ngOnInit():void
{
this.service.getDetails3().subscribe(data=>this.details=data)
}

}
