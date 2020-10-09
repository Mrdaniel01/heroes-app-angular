import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: any[] = [];
  term: string;

  @Input() heroe: any = {};
  @Input() index: number;

  constructor( private activatedRoute: ActivatedRoute, private heroesService: HeroesService ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.term = params['term'];
      this.heroes = this.heroesService.searchHeroes(params['term']);
      console.log( this.heroes );
    });
  }
}
