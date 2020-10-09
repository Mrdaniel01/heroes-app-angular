import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html'
})
export class HeroCardComponent implements OnInit {

 

  @Input() heroe: any = {};
  @Input() index: number;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  verHeroe() {
    console.log(this.index);
    this.router.navigate( ['/heroe', this.index] );
  }

}
