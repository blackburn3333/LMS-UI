import { Component, OnInit } from '@angular/core';
import {AlertboxesService} from '../alertboxes.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private alertBoxes: AlertboxesService) { }

  ngOnInit() {
  }

  delete() {
    this.alertBoxes.warningAlert('DELETE', 'ARE YOU SURE YOU WANT TO DELETE BOOK');
  }

  update() {
    this.alertBoxes.warningAlert('UPDATE', 'ARE YOU SURE YOU WANT TO UPDATE BOOK');
  }

}
