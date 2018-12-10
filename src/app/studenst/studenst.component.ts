import {Component, OnInit} from '@angular/core';
import {AlertboxesService} from '../alertboxes.service';

@Component({
  selector: 'app-studenst',
  templateUrl: './studenst.component.html',
  styleUrls: ['./studenst.component.scss']
})
export class StudenstComponent implements OnInit {

  constructor(private alertBoxes: AlertboxesService) {
  }

  ngOnInit() {
  }

  delete() {
     this.alertBoxes.warningAlert('DELETE', 'ARE YOU SURE YOU WANT TO DELETE MEMBER');
  }

  update() {
    this.alertBoxes.warningAlert('UPDATE', 'ARE YOU SURE YOU WANT TO UPDATE MEMBER');
  }
}
