import {Component, effect} from '@angular/core';
import {PersonCardComponent} from '../../shared/components/person-card/person-card.component';
import {PersonType} from '../../../types/person.type';
import {CommonModule} from '@angular/common';
import {SubscribeComponent} from '../../shared/components/subscribe/subscribe.component';
import {ExpertsService} from '../../shared/services/experts.service';

@Component({
  selector: 'app-about',
  imports: [CommonModule, PersonCardComponent, SubscribeComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  persons:PersonType[] = [];
  constructor(private expertsService:ExpertsService) {
    effect(()=>{
      this.expertsService.getSomeExperts().then((data)=>{
        this.persons = data;
      }, (error)=>{
        console.log(error);
      });
    })
  }
}
