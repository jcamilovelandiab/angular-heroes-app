import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styles: []
})
export class HeroListComponent implements OnInit {

  heroes: Hero[] = [];

  constructor( private heroesService : HeroesService ) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe( heroes => {
        this.heroes = heroes;
      });
  }

}
