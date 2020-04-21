import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeroDetailComponent } from './hero-detail.component';

import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CharacterEditingComponent } from './character-editing/character-editing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    InventoryComponent,
    CharacterEditingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
