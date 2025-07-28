import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {PopUpService} from '../../services/pop-up.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'pop-up',
  imports: [CommonModule],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss'
})
export class PopUpComponent implements OnInit {
  isShown: boolean = false;
  @ViewChild('innerPopupText')innerPopupText:ElementRef|undefined;

  constructor(private popUpService: PopUpService) {
  }

  ngOnInit() {
    this.popUpService.isShown$.subscribe((isShown: boolean) => {
      this.isShown = isShown;
    });
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
