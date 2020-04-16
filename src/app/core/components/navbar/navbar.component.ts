import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { LogoutAction } from '@core/auth/auth.actions';
import { AppState } from '@core/core.state';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'cia-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public sidebarVisible: boolean = false;
  private toggleButton: any;


  constructor(private store: Store<AppState>,
    @Inject(DOCUMENT) private document: Document) { }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    // const html = document.getElementsByTagName('html')[0];

    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);
    this.document.body.classList.add('nav-open');

    this.sidebarVisible = true;
  }

  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  }

  sidebarToggle() {
    this.sidebarVisible = !this.sidebarVisible;
    if (this.sidebarVisible) {
      this.document.body.classList.add('nav-open');
    } else {
      this.document.body.classList.remove('nav-open');
    }
    /*
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
    */
  }

  onLogout() {
    this.store.dispatch(new LogoutAction());
  }

}
