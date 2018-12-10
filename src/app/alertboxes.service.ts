import {Injectable} from '@angular/core';
import swal from 'sweetalert';
@Injectable({
  providedIn: 'root'
})
export class AlertboxesService {

  constructor() {
  }


  public Successful(title, message) {
    swal(title, message, 'success');
  }

  public Unsuccessful(title, message){
    swal(title, message, 'success');
  }

  public warningAlert(title, message) {
    swal({
      title: title,
      text: message,
      icon: 'warning',
      buttons: [true, true],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          return true;
        } else {
          return false;
        }
      });
  }

}
