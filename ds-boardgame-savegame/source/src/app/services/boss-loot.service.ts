import { Injectable } from '@angular/core';

@Injectable()
export class BossLootService {
    getBossLoot(): String[] {
        return LOOT;
    }
}


export const LOOT: string[] = [
   'Winged Knight Armour',
   'Dancers Enchanted Swords',
   'Soothing Sunlight',
   'Dancer Armour',
   'Titanite',
   'Titanite Catch Pole',
   'Gargoyle Tail Axe',
   'Gargoyle\'s Halberd',
   'Gargoyle\'s Shield',
   'Irithyll Rapier',
   'Outrider Armour',
   'Dragonslayer Spear',
   'Smoug\'s Hammer',
   'Dragonslayer Armour',
    'Smoug\'s Armour',
    'Irithyll Straight Sword',
    'Winged Knight Twin Axes',
    'Winged Knight Halberd'
];