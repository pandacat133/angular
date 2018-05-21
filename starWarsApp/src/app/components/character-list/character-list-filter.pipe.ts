import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../../domains/character';

@Pipe({
  name: 'characterListFilter'
})

export class CharacterListFilterPipe implements PipeTransform {

  transform (characters: Character[], filterBy: string ) : Character[] {
    let filtered: Character[] = characters;

    if(filterBy !== undefined) {
      filtered = characters.filter((character: Character) => {
        let keep: boolean = character.name.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1;
        return keep;
      });
    }

    return filtered;
  }
}
