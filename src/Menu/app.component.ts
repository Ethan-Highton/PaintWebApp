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

  constructor(private router: Router) { }

  ngOnInit() {
    this.getPageTitle();
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
