import {Component, OnInit} from '@angular/core';
import {NewsType} from '../../../types/news.type';
import {NewsService} from '../../shared/services/news.service';
import {ActivatedRoute} from '@angular/router';
import {SubscribeComponent} from '../../shared/components/subscribe/subscribe.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'blog-article',
  imports: [SubscribeComponent, CommonModule],
  templateUrl: './blog-article.component.html',
  styleUrl: './blog-article.component.scss'
})
export class BlogArticleComponent implements OnInit {
  news:NewsType[]=[];
  article:NewsType|undefined;
  constructor(private newsService:NewsService, private activatedRoute: ActivatedRoute) {
    this.news = this.newsService.news();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.article = this.news.find(item=> parseInt(params['id']) === item.id);
    })
  }

}
