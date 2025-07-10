import { Component } from '@angular/core';
import {PersonCardComponent} from '../../shared/components/person-card/person-card.component';
import {PersonType} from '../../../types/person.type';
import {CommonModule} from '@angular/common';
import {SubscribeComponent} from '../../shared/components/subscribe/subscribe.component';

@Component({
  selector: 'app-about',
  imports: [CommonModule, PersonCardComponent, SubscribeComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  persons:PersonType[] = [
    {
      fullName: 'Giovani Bacardo',
      image:'/images/team/person1.png',
      jobTitle: 'Farmer',
      socials: {
        facebook:'https://facebook.com',
        twitter:'https://twitter.com'
      }
    },
    {
      fullName: 'Marianne Loreno',
      image:'/images/team/person2.png',
      jobTitle: 'Designer',
      socials: {
        facebook:'https://facebook.com',
        twitter:'https://twitter.com',
        instagram: 'https://www.instagram.com'
      }
    },
    {
      fullName: 'Riga Pelore',
      image:'/images/team/person3.png',
      jobTitle: 'Farmer',
      socials: {
        facebook:'https://facebook.com',
        twitter:'https://twitter.com',
        instagram: 'https://www.instagram.com'
      }
    }
  ]
}
