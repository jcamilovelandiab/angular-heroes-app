import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/heroes.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private httpClient: HttpClient ) {}

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>('http://localhost:3000/heroes');
  }

}
