import {Component, Input} from '@angular/core';
import {PersonType} from '../../../../types/person.type';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'person-card',
  imports: [CommonModule],
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.scss'
})
export class PersonCardComponent {
  @Input() person: PersonType = {
    fullName: '',
    image:'',
    jobTitle: '',
    socials: {
      facebook:'',
      twitter:'',
      instagram:''
    }
  }
}
