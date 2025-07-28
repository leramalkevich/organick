import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {PopUpService} from '../../services/pop-up.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'pop-up',
  imports: [CommonModule],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss'
})
export class PopUpComponent implements OnInit, OnDestroy {
  isShown: boolean = false;
  @ViewChild('innerPopupText')innerPopupText:ElementRef|undefined;

  constructor(private popUpService: PopUpService) {
  }

  ngOnInit() {
    this.popUpService.isShown$.subscribe((isShown: boolean) => {
      this.isShown = isShown;
    });
  }
  ngOnDestroy() {
    this.popUpService.isShown$.unsubscribe();
  }

  hidePopUp() {
    this.popUpService.hidePopUp();
  }

  @HostListener('document:click', ['$event'])
  click(event:Event){
    if (this.innerPopupText && (event.target as HTMLElement).className.indexOf('popup-inner-text') === -1) {
      this.popUpService.hidePopUp();
    }
  }

}
