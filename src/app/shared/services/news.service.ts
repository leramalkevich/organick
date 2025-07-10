import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  getNews() {
    return [
      {
        id: 1,
        image: 'news-bg-image1.png',
        title: 'The Benefits of Vitamin D & How to Get It',
        description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        author: 'Rachi Card',
        published: '25 Nov',
        text: ''
      },
      {
        id: 2,
        image: 'news-bg-image2.png',
        title: 'Our Favorite Summertime Tomato',
        description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        author: 'Rachi Card',
        published: '25 Nov',
        text: ''
      },
      {
        id: 3,
        image: 'news-bg-image3.png',
        title: 'Benefits of Vitamin C & How to Get It',
        description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        author: 'Rachi Card',
        published: '25 Nov',
        text: ''
      },
      {
        id: 4,
        image: 'news-bg-image4.png',
        title: 'Research More Organic Foods',
        description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        author: 'Rachi Card',
        published: '25 Nov',
        text: ''
      },
      {
        id: 5,
        image: 'news-bg-image5.png',
        title: 'Everyday Fresh Fruites',
        description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        author: 'Rachi Card',
        published: '25 Nov',
        text: ''
      },
      {
        id: 6,
        image: 'news-bg-image6.png',
        title: 'Don’t Use Plastic Product! it’s Kill Nature',
        description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        author: 'Rachi Card',
        published: '25 Nov',
        text: ''
      },
    ]
  }

  getMainNews(){
    return Promise.resolve(this.getNews().slice(0, 2));
  }
  news = signal(this.getNews());
  mainNews = signal(this.getMainNews());
  constructor() {}
}
