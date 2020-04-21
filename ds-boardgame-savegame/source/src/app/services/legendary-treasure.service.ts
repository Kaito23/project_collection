import { Injectable } from '@angular/core';

@Injectable()
export class LegendaryTreasureService {
    getHeroes(): String[] {
        return HEROES;
    }
}


export const HEROES: String[] = [
   'Dragon Tooth',
   'Avelyn',
   'Gotthard Twinswords',
   'Fume Ultra Greatsword',
   'Santier\'s Spear' ,
   'Sunlight Straight Sword',
   'Washing Pole' ,
   'Moonlight Greatsword' ,
   'Dark Sword' ,
   'Drake Sword' 
];