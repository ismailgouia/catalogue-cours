
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Catalogue } from '../../services/catalogue';

import { Cours, COURS } from '../../donnees/cours';
import { DetailCours } from '../../composants/detail-cours/detail-cours';
import { inject } from '@angular/core';
@Component({
  selector: 'app-page-detail',
  imports: [DetailCours, RouterLink],
  templateUrl: './page-detail.html',
  styleUrl: './page-detail.css',
})
export class PageDetail {

  @Input() id = '';

  private catalogue = inject(Catalogue);
get cours(): Cours | undefined {
return this.catalogue.trouver(Number(this.id));
}

}
