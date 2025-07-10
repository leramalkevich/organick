import { Component } from '@angular/core';
import {SubscribeComponent} from '../../shared/components/subscribe/subscribe.component';
import {CommonModule} from '@angular/common';
import {PersonCardComponent} from '../../shared/components/person-card/person-card.component';
import {ExpertsService} from '../../shared/services/experts.service';
import {PersonType} from '../../../types/person.type';

@Component({
  selector: 'team',
  imports: [SubscribeComponent, CommonModule, PersonCardComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  people:PersonType[]=[];
  constructor(private expertsService:ExpertsService) {
    this.people = this.expertsService.wholeTeam();
  }
}
