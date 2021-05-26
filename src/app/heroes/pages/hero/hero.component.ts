import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { Hero } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [`
    img {
      width: 100%;
    }
  `]
})
export class HeroComponent implements OnInit {

  id: string;
  hero: Hero;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
        .pipe(
          switchMap( ({ id }) => this.heroesService.getHeroById(id) ),
          tap(console.log)
        )
        .subscribe( hero => this.hero = hero );
  }

  goBack(): void {
    this.router.navigate(['/heroes/list']);
  }

}
