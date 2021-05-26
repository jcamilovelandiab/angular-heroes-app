import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

  transform( heroId: string ): string {
    return `assets/heroes/${heroId}.jpg`;
  }

}
