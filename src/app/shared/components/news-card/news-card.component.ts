import {Component, Input} from '@angular/core';
import {NewsType} from '../../../../types/news.type';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'newsCard',
  imports: [CommonModule],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss'
})
export class NewsCardComponent {
  @Input() newsArticle: NewsType = {
    id: undefined,
    image: '',
    title: '',
    description: '',
    author: '',
    published: '',
    text: ''
  }
  pathToImage:string='/images/news/';
}
