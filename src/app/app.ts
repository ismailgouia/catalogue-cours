
import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from './services/session';

import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import { EnTete } from './composants/en-tete/en-tete';
import { PiedPage } from './composants/pied-page/pied-page';

@Component({
  selector: 'app-root',
  imports: [
    EnTete,
    PiedPage,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    session = inject(Session);
  private router = inject(Router);

  deconnecter() {
    this.session.deconnecter();
    this.router.navigateByUrl('/');
  }

}
