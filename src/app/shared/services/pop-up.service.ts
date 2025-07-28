import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  isShown$ = new Subject<boolean>();

  constructor() {
  }
  showPopUp(){
    this.isShown$.next(true);
  }
  hidePopUp(){
    this.isShown$.next(false);
  }
}
