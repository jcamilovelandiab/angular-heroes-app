import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  term: string = '';
  heroes: Hero[] = [];
  selectedHero!: Hero | undefined;

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
  }

  search() {
    this.heroesService.getSuggestions(this.term.trim())
        .subscribe( heroes => this.heroes = heroes );
  }

  onSelectedOption(event: any) {
    if( !event.option.value ) {
      this.selectedHero = undefined;
    } else {
      const hero: Hero = event.option.value;
      this.term = hero.superhero;
      this.heroesService.getHeroById( hero.id! )
          .subscribe(  hero => this.selectedHero = hero);
    }
  }

}
