import {Component} from '@angular/core';
import {ProductCardComponent} from '../../shared/components/product-card/product-card.component';
import {CardType} from '../../../types/card.type';
import {CommonModule} from '@angular/common';
import {CarouselModule, OwlOptions} from 'ngx-owl-carousel-o';
import {SubscribeComponent} from '../../shared/components/subscribe/subscribe.component';

@Component({
  selector: 'app-main',
  imports: [ProductCardComponent, CommonModule, CarouselModule, SubscribeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  products: CardType[] = [
    {
      id: 1,
      category: 'Vegetable',
      image: 'product1.png',
      title: 'Calabrese Broccoli',
      oldPrice: '$20.00',
      newPrice: '$13.00',
      reviews: 5
    },
      {
        id: 2,
        category: 'Fresh',
        image: 'product2.png',
        title: 'Fresh Banana Fruites',
        oldPrice: '$20.00',
        newPrice: '$14.00',
        reviews: 5
      },
      {
        id: 3,
        category: 'Millets',
        image: 'product3.png',
        title: 'White Nuts',
        oldPrice: '$20.00',
        newPrice: '$15.00',
        reviews: 5
      },
      {
        id: 4,
        category: 'Vegetable',
        image: 'product4.png',
        title: 'Vegan Red Tomato',
        oldPrice: '$20.00',
        newPrice: '$17.00',
        reviews: 5
      },
      {
        id: 5,
        category: 'Health',
        image: 'product5.png',
        title: 'Mung Bean',
        oldPrice: '$20.00',
        newPrice: '$11.00',
        reviews: 5
      },
      {
        id: 6,
        category: 'Nuts',
        image: 'product6.png',
        title: 'Brown Hazelnut',
        oldPrice: '$20.00',
        newPrice: '$12.00',
        reviews: 5
      },
      {
        id: 7,
        category: 'Fresh',
        image: 'product7.png',
        title: 'Eggs',
        oldPrice: '$20.00',
        newPrice: '$17.00',
        reviews: 5
      },
      {
        id: 8,
        category: 'Fresh',
        image: 'product8.png',
        title: 'Zelco Suji Elaichi Rusk',
        oldPrice: '$20.00',
        newPrice: '$15.00',
        reviews: 5
      }
    ];
  offerProducts:CardType[]=[
    {
      id: 9,
      category: 'Vegetable',
      image: 'product9.png',
      title: 'Mung Bean',
      oldPrice: '$20.00',
      newPrice: '$11.00',
      reviews: 5
    },
    {
      id: 10,
      category: 'Vegetable',
      image: 'product10.png',
      title: 'Brown Hazelnut',
      oldPrice: '$20.00',
      newPrice: '$12.00',
      reviews: 5
    },
    {
      id: 11,
      category: 'Vegetable',
      image: 'product11.png',
      title: 'Onion',
      oldPrice: '$20.00',
      newPrice: '$17.00',
      reviews: 5
    },
    {
      id: 12,
      category: 'Vegetable',
      image: 'product12.png',
      title: 'Cabbage',
      oldPrice: '$20.00',
      newPrice: '$17.00',
      reviews: 5
    },
  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    items: 1,
    // autoplay: true,
    autoplayHoverPause: true,
    nav: false
  }
  slidesStore = [
    {
      id: '1',
      userInfo: {
        firstName: 'Sara',
        lastName: 'Taylor',
        addData: 'Consumer'
      },
      image: '/images/users/user1.png',
      review: {
        stars: 5,
        text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.'
      }
    },
    {
      id: '2',
      userInfo: {
        firstName: 'Taylor',
        lastName: 'Anderson',
        addData: 'Consumer'
      },
      image: '/images/users/user2.png',
      review: {
        stars: 4,
        text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.'
      }
    },
    {
      id: '3',
      userInfo: {
        firstName: 'Liza',
        lastName: 'Aaron-Craft',
        addData: 'Consumer'
      },
      image: '/images/users/user3.webp',
      review: {
        stars: 5,
        text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.'
      }
    },
  ]
}
