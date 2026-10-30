import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placesRestantes',
})
export class PlacesRestantesPipe implements PipeTransform {
  transform(places: number, seuil: number = 5): string {

    // Aucune place disponible
    if (places === 0) {
      return 'Complet';
    }

    // Une seule place disponible
    if (places === 1) {
      return 'Dernière place !';
    }

    // Entre 2 et le seuil de places
    if (places >= 2 && places <= seuil) {
      return `Plus que ${places} places`;
    }

    // Plus de places que le seuil
    if (places > seuil) {
      return `${places} places disponibles`;
    }

    return '';
  }
}