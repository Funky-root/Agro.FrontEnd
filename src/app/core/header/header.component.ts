import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'main-header',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: 'header.component.html',
  styleUrl: 'header.component.css'
})
export class HeaderComponent {
  title = 'agrot';
  hideHeader = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects || event.url;
        this.hideHeader = url.startsWith('/login') || url.startsWith('/register');
      });
  }

  isAuth(): boolean {
    const token = localStorage.getItem('JWTToken');
    return !!token;
  }
}


