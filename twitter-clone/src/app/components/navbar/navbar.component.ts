import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  isMenuHidden = true;

  isDarkMode = false;

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }


 

  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }

  closeMenu() {
    this.isMenuHidden = true;
  }



  @HostListener('document:click', ['$event.target'])
  onClick(target: any) {
    if (!target.closest('#menu') && !target.closest('#hamburger')) {
      this.closeMenu();
    }
  }

}
