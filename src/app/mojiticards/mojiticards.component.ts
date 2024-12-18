import { Component } from '@angular/core';
import { Cards } from '../models/cards';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-mojiticards',
  templateUrl: './mojiticards.component.html',
  styleUrls: ['./mojiticards.component.css']
})
export class MojiticardsComponent {

  details:Cards[]=[];
  constructor(private service:UserService){}
ngOnInit():void
{
  this.service.getDetails2().subscribe(data=>this.details=data)
}

}
