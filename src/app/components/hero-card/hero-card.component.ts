import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html'
})
export class HeroCardComponent implements OnInit {

 

  @Input() heroe: any = {};
  @Input() index: number;

  @Output() selectedHero: EventEmitter<number>;

  constructor( private router: Router) { 

    this.selectedHero = new EventEmitter();

  }

  ngOnInit(): void {
  }

  verHeroe() {
    // console.log(this.index);
    // this.router.navigate( ['/heroe', this.index] );
    this.selectedHero.emit(this.index);
  }

}
