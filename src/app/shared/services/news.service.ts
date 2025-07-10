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
        subTitleText: 'Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ',
        text: 'Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology. Preferred Form of Vitamin D? It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.'
      },
      {
        id: 2,
        image: 'news-bg-image2.png',
        title: 'Our Favorite Summertime Tomato',
        description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        author: 'Rachi Card',
        published: '25 Nov',
        subTitleText: 'Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ',
        text: 'Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology. Preferred Form of Vitamin D? It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.'
      },
      {
        id: 3,
        image: 'news-bg-image3.png',
        title: 'Benefits of Vitamin C & How to Get It',
        description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        author: 'Rachi Card',
        published: '25 Nov',
        subTitleText: 'Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ',
        text: 'Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology. Preferred Form of Vitamin D? It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.'
      },
      {
        id: 4,
        image: 'news-bg-image4.png',
        title: 'Research More Organic Foods',
        description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        author: 'Rachi Card',
        published: '25 Nov',
        subTitleText: 'Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ',
        text: 'Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology. Preferred Form of Vitamin D? It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.'
      },
      {
        id: 5,
        image: 'news-bg-image5.png',
        title: 'Everyday Fresh Fruites',
        description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        author: 'Rachi Card',
        published: '25 Nov',
        subTitleText: 'Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ',
        text: 'Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology. Preferred Form of Vitamin D? It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.'
      },
      {
        id: 6,
        image: 'news-bg-image6.png',
        title: 'Don’t Use Plastic Product! it’s Kill Nature',
        description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        author: 'Rachi Card',
        published: '25 Nov',
        subTitleText: 'Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed ',
        text: 'Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology. Preferred Form of Vitamin D? It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.'
      },
    ]
  }

  getMainNews() {
    return Promise.resolve(this.getNews().slice(0, 2));
  }

  news = signal(this.getNews());
  mainNews = signal(this.getMainNews());

  constructor() {
  }
}
