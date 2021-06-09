import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {InfiniteScrollModule} from 'ngx-infinite-scroll';

import { CharacterListComponent } from '@characters/character-list/character-list.component';
import { CharacterDetailsComponent } from '@characters/character-details/character-details.component';
import { CharacterComponent } from '@characters/character.componet';
import { CharacterTranslatePipe } from './character-translate.pipe';


const myComponents = [
  CharacterDetailsComponent, 
  CharacterListComponent, 
  CharacterComponent
];

@NgModule({
  declarations: [...myComponents, CharacterTranslatePipe],
  imports: [CommonModule, RouterModule, InfiniteScrollModule],
  exports: [...myComponents],
})
export class CharactersModule {}
