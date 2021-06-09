import { Pipe, PipeTransform } from '@angular/core';
import { normalizeText } from './character-util';


@Pipe({name: 'characterTranslate'})
export class CharacterTranslatePipe implements PipeTransform {
  transform(value: string): string {
    const name = normalizeText(value);
    console.log(name);
    switch (name) {
        case "male":
            return "Masculino";
        case "female":
            return "Femenino";
        case "unknown":
            return "Desconocido";
        default:
            return name;
    }
  }
}

