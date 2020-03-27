import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  switchDirection() {
    if (localStorage.getItem('lang') === 'ar') {
      return 'rtl';
    } else if (localStorage.getItem('lang') === 'fr') {
      return 'ltr';
    }
  }

  switchDirectionReverse() {
    if (localStorage.getItem('lang') === 'ar') {
      return 'ltr';
    } else if (localStorage.getItem('lang') === 'fr') {
      return 'rtl';
    }
  }

  alignText() {
    if (localStorage.getItem('lang') === 'ar') {
      return 'text-align-right';
    } else if (localStorage.getItem('lang') === 'fr') {
      return 'text-align-left';
    }
  }

}
