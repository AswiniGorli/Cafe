import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseurl1 = "assets/cards.json";
  private baseurl2 = "assets/mojitoimgs.json";
  private baseurl3 = "assets/hotcoffeeimgs.json";


  constructor(private http: HttpClient) { }
  
  getDetails1(): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl1}`)
  }
  getDetails2(): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl2}`)
  }
  getDetails3(): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl3}`)
  }

}
