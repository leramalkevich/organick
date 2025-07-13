import {Component, effect, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsCardComponent} from '../../shared/components/news-card/news-card.component';
import {NewsType} from '../../../types/news.type';
import {NewsService} from '../../shared/services/news.service';
import {SubscribeComponent} from '../../shared/components/subscribe/subscribe.component';

@Component({
  selector: 'app-blog',
  imports: [CommonModule, NewsCardComponent, SubscribeComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit, OnDestroy {
  news:NewsType[]=[];
  buttonShort:boolean|undefined;
  constructor(private newsService:NewsService) {
    effect(()=>{
      this.news = this.newsService.news();
    });
    this.newsService.buttonShort.set(true);
  }
  ngOnInit() {
    this.buttonShort = this.newsService.buttonShort();
  }
  ngOnDestroy() {
    this.newsService.buttonShort.set(false);
  }
}
