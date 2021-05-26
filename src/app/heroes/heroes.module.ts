import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AddComponent } from './pages/add/add.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HeroListComponent } from './pages/hero-list/hero-list.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroesRoutingModule } from './heroes-routing.module';


@NgModule({
  declarations: [
    AddComponent,
    HeroComponent,
    HeroListComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
