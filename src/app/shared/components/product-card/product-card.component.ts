import {Component, Input} from '@angular/core';
import {CardType} from '../../../../types/card.type';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'product-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input()product:CardType = {
    id: 0,
    category: '',
    image: '',
    title: '',
    oldPrice: '',
    newPrice: '',
    reviews: 0
  }
  pathToImage:string = 'images/products/';
}
