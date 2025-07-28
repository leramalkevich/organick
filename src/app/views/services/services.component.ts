import { Component } from '@angular/core';
import {PopUpService} from '../../shared/services/pop-up.service';
import {PopUpComponent} from '../../shared/components/pop-up/pop-up.component';

@Component({
  selector: 'services',
  imports: [PopUpComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  constructor(private popUpService:PopUpService) {
  }
  showPopUp(){
    this.popUpService.showPopUp();
  }
}
