import {Component, effect} from '@angular/core';
import {PersonCardComponent} from '../../shared/components/person-card/person-card.component';
import {PersonType} from '../../../types/person.type';
import {CommonModule} from '@angular/common';
import {SubscribeComponent} from '../../shared/components/subscribe/subscribe.component';
import {ExpertsService} from '../../shared/services/experts.service';
import {PopUpService} from '../../shared/services/pop-up.service';
import {PopUpComponent} from '../../shared/components/pop-up/pop-up.component';

@Component({
  selector: 'app-about',
  imports: [CommonModule, PersonCardComponent, SubscribeComponent, PopUpComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  persons:PersonType[] = [];
  constructor(private expertsService:ExpertsService, private popUpService:PopUpService) {
    effect(()=>{
      this.expertsService.getSomeExperts().then((data)=>{
        this.persons = data;
      }, (error)=>{
        console.log(error);
      });
    })
  }
  showPopUp(){
    this.popUpService.showPopUp();
  }
}
