import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {Router} from '@angular/router'

@Component({
  selector: 'app-nav',
  imports: [RouterModule,CommonModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {

rutaActual: string ='';
  constructor(private router:Router){
  this.router.events.subscribe(()=>{
    this.rutaActual=this.router.url;
  });
}
}
