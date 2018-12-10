import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.changeClass();
  }

   changeClass() {
    console.log(window.location.pathname);
    const pathname = window.location.pathname
    if (pathname === '/books') {
      document.getElementById('books').classList.add('active');
    } else if (pathname === '/members') {
      document.getElementById('members').classList.add('active');
    } else if (pathname === '/borrowandreturn') {
      document.getElementById('barrow').classList.add('active');
    } else if (pathname === '/overduebooks') {
      document.getElementById('over').classList.add('active');
    }
  }

}
