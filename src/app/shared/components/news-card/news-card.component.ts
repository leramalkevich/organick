import {Component, Input} from '@angular/core';
import {NewsType} from '../../../../types/news.type';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'newsCard',
  imports: [CommonModule, RouterLink],
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
    subTitleText: '',
    text: ''
  }
  pathToImage: string = '/images/news/';
  @Input()shortButton: boolean|undefined;
}
