import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/heroes.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  apiBaseUrl: string = 'http://localhost:3000'; 

  constructor( private httpClient: HttpClient ) {}

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${this.apiBaseUrl}/heroes`);
  }

  getHeroById( id: string ): Observable<Hero> {
    return this.httpClient.get<Hero>(`${this.apiBaseUrl}/heroes/${id}`);
  }

}
