import { Injectable } from '@angular/core';

@Injectable()
export class ClassSpecificTreasureService {
    getHeroes(): String[] {
        return TREASURES;
    }
}


export const TREASURES: String[] = [
   'Dragonslayer\'s Axe',
   'Balder Side Sword',
   'Great Machete',
    'Silver Knight Shield',
    'Spiked Mace',
    'Great Wooden Hammer',
    'Warpick',
    'Fallen Knight Armour',
    'Knight slayer\'s Ring',
    'Caestus',
    'Sun Princess Ring',
    'Falachion',
    'Lothric Knight Armour',
    'Elite Knight Armour',
    'Faarm Armour',
    'Blue Tearstone Ring',
    'Spider Shield',
    'Black Iron Greatshield',
    'Broadsword',
    'Twin Dragon Greatshield',
    'Replenishment',
    'Tiny Being\'s Ring',
    'Cathedral Knight Armour',
    'Golden Wing Crest Shield',
    'Partizan',
    'Saint Bident',
    'Bountful Sunlight',
    'Grass Crest Shield',
    'Bountiful Light',
    'Lothric\'s Holy Sword',
    'Hornet Ring',
    'Spotted Whip',
    'Composite Bow',
    'Umbral Dagger',
    'Alva Armour',
    'Lucerne',
    'Carthus Curved Sword',
    'Rotten Ghru Dagger',
    'ElkHorn Rounded Shield',
    'Shadow Armour'
];