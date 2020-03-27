import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.css']
})
export class AdviceComponent implements OnInit {

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
