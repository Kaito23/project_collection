import { Component } from '@angular/core';
import { Character } from './models/character';
import { CommonTreasureService } from './services/common-treasure.service';
import {LegendaryTreasureService} from './services/legendary-treasure.service'
import {ClassSpecificTreasureService} from './services/class-specific-treasure.service';
import {BossLootService} from './services/boss-loot.service';
import { OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { GameData } from './models/game-data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CommonTreasureService, LegendaryTreasureService, ClassSpecificTreasureService, BossLootService]
})
export class AppComponent implements OnInit{
  aviableHeroes: String[] = ["Herald", "Knight", "Assassin", "Warrior"];
  chosenHeroes: Character[] = [];

  showUpload: boolean = true;
  heroesHeadline: string = "Edit details";

  heroes: String[];
  public selectedHero: string[] = [];
  legendaryTreasures: String[];
  classSpecificTreasures: String[];
  bossLoot: String[];

  editingHeroDeatils: string;

  gameData: GameData;


  ngOnInit(): void {
    this.getHeroes();
  }

 
  newSelection(hero: string): void {
    console.log(hero);
     var index = this.aviableHeroes.indexOf(hero);
     if (index > -1) {
          this.aviableHeroes.splice(index, 1);
      }
    var newCharacter = new Character();
    newCharacter.character = hero;
    this.chosenHeroes.push(newCharacter);
  }

  constructor(
  private commonTreasureService: CommonTreasureService,
  private legendaryTreasureService: LegendaryTreasureService,
  private classSpecificTreasureService: ClassSpecificTreasureService,
  private bossLootService: BossLootService) { 
    this.selectedHero;
    this.gameData = new GameData();
  }
  
  onSelect(hero: string): void {
    if(!this.isInList(hero)){
      this.selectedHero.push(hero);
    } else {
      var index = this.selectedHero.indexOf(hero);
      if (index > -1) {
          this.selectedHero.splice(index, 1);
      }
    }
  }

  getHeroes(): void {
    this.heroes = this.commonTreasureService.getHeroes();
    this.sortCommonTreasures();
    this.legendaryTreasures = this.legendaryTreasureService.getHeroes();
    this.sortLegendaryTreasures();
    this.classSpecificTreasures = this.classSpecificTreasureService.getHeroes();
    this.sortClassSpecificTreasures();
    this.bossLoot = this.bossLootService.getBossLoot();
    this.sortBossLoottreasures();
  }

  isInList(hero: String): boolean {
    for (var i = 0; i < this.selectedHero.length; i++) {
        if (this.selectedHero[i] === hero) {
            return true;
        }
    }
    return false;
  }


  save(): void {
    //var data = this.selectedHero; 
    this.gameData.inventory = this.selectedHero;
    this.gameData.characters = this.chosenHeroes;
    var data = JSON.stringify(this.gameData);

    var filename = "save.json"
    var type = "json";
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
  }

  changeListener($event):void {
    this.upload($event.target);
  }

  upload(inputValue:any):void {
        var dataARR = this.selectedHero;
        var data = null;
        var file:File = inputValue.files[0];
        var reader:FileReader = new FileReader();

        reader.onload = function (e) {
            var contents = e.target;
            var csvData = reader.result;
            data = csvData;

            if (data && data.length > 0) {
                console.log('Imported -' + data + '- rows successfully!');
            } else {
                alert('No data to import!');
            }
        };
        reader.readAsText(file);

        reader.onerror = function () {
            alert('Unable to read ' + file);
        };
       reader.onloadend = (e) => {
          //this.selectedHero = extractData(data, dataARR);
          console.log("---");
          console.log("import:");
          //console.log(data);
          var test = JSON.parse(data);
          console.log(test.souls);
          //this.gameData.souls = test.souls;
          this.gameData.souls = test.souls;
          for(var i = 0; i < test.inventory.length; i++) {
            console.log(test.inventory[i]);
            var we = test.inventory[i];
            this.onSelect(we);
          }

          for(var i = 0; i < test.characters.length; i++ ){
                console.log("i: " + i);
                var newCharacter = new Character();
                newCharacter.character = test.characters[i].character;
                newCharacter.player = test.characters[i].player;
                newCharacter.ember = test.characters[i].ember;

                newCharacter.strengthTier= test.characters[i].strengthTier;
                newCharacter.dexterityTier = test.characters[i].dexterityTier;
                newCharacter.intelligenceTier = test.characters[i].intelligenceTier;
                newCharacter.faithTier = test.characters[i].faithTier;
              
                newCharacter.leftHand1 = test.characters[i].leftHand1;
                newCharacter.leftHand2 = test.characters[i].leftHand2;
                newCharacter.leftHand3 = test.characters[i].leftHand3;
              
                newCharacter.rightHand1 = test.characters[i].rightHand1;
                newCharacter.rightHand2 = test.characters[i].rightHand2;
                newCharacter.rightHand3 = test.characters[i].rightHand3;
              
                newCharacter.amour1 = test.characters[i].amour1;
                newCharacter.amour2 = test.characters[i].amour2;
                newCharacter.amour3 = test.characters[i].amour3;
              
                newCharacter.inventory1 = test.characters[i].inventory1;
                newCharacter.inventory2 = test.characters[i].inventory2;
                newCharacter.inventory3 =test.characters[i].inventory3;
                
                this.chosenHeroes.push(newCharacter);
          }
       }
       this.showUpload = false;
       this.heroesHeadline = "Choice";
    }


    sortCommonTreasuresDefault: boolean = false;
    sortCommonTreasures(): void {
      if(!this.sortCommonTreasuresDefault) {
        this.heroes.sort();      
        this.sortCommonTreasuresDefault = true;  
      } else {
        this.heroes.reverse();
      }
    }

    sortClassSpecificTreasuresDefault: boolean = false;
    sortClassSpecificTreasures():void {
      if(!this.sortClassSpecificTreasuresDefault) {
        this.classSpecificTreasures.sort();      
        this.sortClassSpecificTreasuresDefault = true;  
      } else {
        this.classSpecificTreasures.reverse();
      }
    }

    sortLegendaryTreasuresDefault: boolean = false;
    sortLegendaryTreasures(): void {
      if(!this.sortLegendaryTreasuresDefault) {
        this.legendaryTreasures.sort();      
        this.sortLegendaryTreasuresDefault = true;  
      } else {
        this.legendaryTreasures.reverse();
      }
    }

    sortBossLottTreasuresDefault: boolean = false;
    sortBossLoottreasures(): void {
      if(!this.sortBossLottTreasuresDefault) {
        this.bossLoot.sort();      
        this.sortBossLottTreasuresDefault = true;  
      } else {
        this.bossLoot.reverse();
      }
    }

}
