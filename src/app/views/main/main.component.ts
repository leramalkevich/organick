import {Component, effect, OnInit} from '@angular/core';
import {ProductCardComponent} from '../../shared/components/product-card/product-card.component';
import {CardType} from '../../../types/card.type';
import {CommonModule} from '@angular/common';
import {CarouselModule, OwlOptions} from 'ngx-owl-carousel-o';
import {SubscribeComponent} from '../../shared/components/subscribe/subscribe.component';
import {RouterLink} from '@angular/router';
import {NewsService} from '../../shared/services/news.service';
import {NewsType} from '../../../types/news.type';
import {NewsCardComponent} from '../../shared/components/news-card/news-card.component';
import {ProductsService} from '../../shared/services/products.service';

@Component({
  selector: 'app-main',
  imports: [ProductCardComponent, CommonModule, CarouselModule, SubscribeComponent, RouterLink, NewsCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  products: CardType[] = [];
  offerProducts: CardType[] = [];
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
  mainNews: NewsType[] = [];
  buttonShort:boolean|undefined;

  constructor(private newsService: NewsService, private productsService: ProductsService) {
    effect(() => {
      this.newsService.mainNews().then((data) =>{
        this.mainNews = data;
      }, (error)=>{
        console.log(error);
      });
    });
  }
  ngOnInit() {
    this.buttonShort = this.newsService.buttonShort();
    this.products = this.productsService.getRandomProducts(8);
    this.offerProducts = this.productsService.getRandomProducts(4);
  }

}
