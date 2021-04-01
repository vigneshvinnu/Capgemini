import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from '../Menu/menu.component';

@Component({
  selector: 'app-restaurent',
  template: ` <h1>restaurent list</h1>
  <router-outlet></router-outlet>
<ul>
    <li *ngFor="let a of array">
     
    <button (click)="onclick(a.name)"> {{a.name}}</button></li>
  </ul>
  
  `,
  styleUrls: ['./restaurent.component.css']
})
export class RestaurentComponent implements OnInit {
  public edited = false;
  array:MenuComponent[] = [];

  r=new MenuComponent('');
   add(){
    this.edited = true;
   }
 
  constructor(private router:Router,private rs:MenuComponent) { }
  onclick(  name: any){this.router.navigate(['/user/restaurent/menu',name]);
  }
    
  ngOnInit(): void {
    this.array=this.rs.getItems();
  }

}