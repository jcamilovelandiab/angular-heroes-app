import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../interfaces/heroes.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  apiBaseUrl: string = environment.apiBaseUrl; 

  constructor( private httpClient: HttpClient ) {}

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${ this.apiBaseUrl }/heroes`);
  }

  getHeroById( id: string ): Observable<Hero> {
    return this.httpClient.get<Hero>(`${ this.apiBaseUrl }/heroes/${id}`);
  }

  getSuggestions( searchTerm: string ): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${ this.apiBaseUrl }/heroes?q=${searchTerm}&_limit=6`);
  }

}
