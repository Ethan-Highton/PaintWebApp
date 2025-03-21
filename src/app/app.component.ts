import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PaintWebApp';
  pageTitle: string | undefined;
  isDarkMode = false;

  constructor(private router: Router) {
    this.checkDarkMode();
  }

  ngOnInit() {
    this.getPageTitle();
    this.checkDarkMode(); // Add this line to ensure dark mode is checked on init
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', this.isDarkMode.toString());
  }

  private checkDarkMode(): void {
    const savedMode = localStorage.getItem('darkMode');
    this.isDarkMode = savedMode === 'true';
    document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
  }

  getPageTitle(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const routePath = event.urlAfterRedirects.split('/')[1];

        switch (routePath) {
          case 'one':
            this.pageTitle =  ' > One Room';
            break;
          case 'multi':
            this.pageTitle =  ' > Multiple Rooms';
            break;
          default:
            this.pageTitle = undefined;
            break;
        }
      }
    });
  }
}
