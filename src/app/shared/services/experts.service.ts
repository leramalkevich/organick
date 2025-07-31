import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpertsService {
  getExperts() {
    return [
      {
        fullName: 'Giovani Bacardo',
        image: 'images/team/person1.png',
        jobTitle: 'Farmer',
        socials: {
          facebook: 'https://facebook.com',
          twitter: 'https://twitter.com'
        }
      },
      {
        fullName: 'Marianne Loreno',
        image: 'images/team/person2.png',
        jobTitle: 'Designer',
        socials: {
          facebook: 'https://facebook.com',
          twitter: 'https://twitter.com',
          instagram: 'https://www.instagram.com'
        }
      },
      {
        fullName: 'Riga Pelore',
        image: 'images/team/person3.png',
        jobTitle: 'Farmer',
        socials: {
          facebook: 'https://facebook.com',
          twitter: 'https://twitter.com',
          instagram: 'https://www.instagram.com'
        }
      },
      {
        fullName: 'Keira Knightley',
        image: 'images/team/person4.png',
        jobTitle: 'Farmer',
        socials: {
          facebook: 'https://facebook.com',
          twitter: 'https://twitter.com',
        }
      },
      {
        fullName: 'Scott Lawrence',
        image: 'images/team/person5.png',
        jobTitle: 'Designer',
        socials: {
          facebook: 'https://facebook.com',
          twitter: 'https://twitter.com',
          instagram: 'https://www.instagram.com'
        }
      },
      {
        fullName: 'Karen Allen',
        image: 'images/team/person6.png',
        jobTitle: 'Farmer',
        socials: {
          facebook: 'https://facebook.com',
          twitter: 'https://twitter.com',
          instagram: 'https://www.instagram.com'
        }
      }
    ]
  }

  getSomeExperts() {
    return Promise.resolve(this.getExperts().slice(0, 3));
  }

  wholeTeam = signal(this.getExperts())

  constructor() {
  }
}
