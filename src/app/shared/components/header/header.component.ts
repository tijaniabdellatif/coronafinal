import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  supportLanguages = ['ar', 'fr'];
  constructor(private router: Router, public translateService: TranslateService) {
    this.translateService.addLangs(this.supportLanguages);
    this.translateService.setDefaultLang('fr');
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    this.translateService.addLangs(this.supportLanguages);
    if (localStorage.getItem('lang') == null) {
      this.translateService.setDefaultLang('ar');
      this.translateService.currentLang = 'ar';
      localStorage.setItem('lang', 'ar');
    } else {
      this.translateService.setDefaultLang(localStorage.getItem('lang'));
      this.translateService.currentLang = localStorage.getItem('lang');
    }
  }

  changeLang() {
    if (this.translateService.currentLang === 'ar') {
      this.translateService.use('fr');
      localStorage.setItem('lang', 'fr');
    } else {
      this.translateService.use('ar');
      localStorage.setItem('lang', 'ar');
    }
  }

  switchLangFlag() {
    if (localStorage.getItem('lang') === 'ar') {
      return 'flag-icon-fr';
    } else if (localStorage.getItem('lang') === 'fr') {
      return 'flag-icon-ma';
    }
  }

}
