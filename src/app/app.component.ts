import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderBarComponent, SidebarComponent, FooterBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected showSidebar!: boolean;
  private router = inject(Router);

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (event.urlAfterRedirects === '/sign-in') {
        this.showSidebar = false;
      } else {
        this.showSidebar = true;
      }
    });
  }
}