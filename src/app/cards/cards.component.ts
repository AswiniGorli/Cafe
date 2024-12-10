import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Cards } from '../models/cards';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  records:Cards[]=[];
constructor(private service:UserService,private router:Router){}

ngOnInit():void{
  this.service.getDetails().subscribe(data=>this.records=data);
}

carddetails(id:number | undefined){
this.router.navigate(['/card',id])
}

}
