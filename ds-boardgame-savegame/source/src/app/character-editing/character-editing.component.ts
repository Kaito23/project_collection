import { Component, Input, OnInit } from '@angular/core';
import {Character} from '../models/character';

@Component({
  selector: 'app-character-editing',
  templateUrl: './character-editing.component.html',
  styleUrls: ['./character-editing.component.css']
})
export class CharacterEditingComponent implements OnInit {
  @Input() chosenHeroes: Character[];
  @Input() selectedHero: string[];
  @Input() aviableHeroes: string[];
  @Input() heroesHeadline: string;
  @Input() showUpload: boolean;

  editingHeroDeatils: string;

  heroSelect(hero: string): void {
    this.editingHeroDeatils = hero;
  }

  removeFromSelection(hero: Character) {
    var index = this.chosenHeroes.indexOf(hero);
     if (index > -1) {
          this.chosenHeroes.splice(index, 1);
      }
      this.aviableHeroes.push(hero.character);
  }

  constructor() { }

  ngOnInit() {
  }

}
