import {Component, OnInit} from '@angular/core';
import {ProductCardComponent} from '../../shared/components/product-card/product-card.component';
import {CommonModule} from '@angular/common';
import {CardType} from '../../../types/card.type';
import {SubscribeComponent} from '../../shared/components/subscribe/subscribe.component';
import {ProductsService} from '../../shared/services/products.service';

@Component({
  selector: 'app-shop',
  imports: [ProductCardComponent, CommonModule, SubscribeComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {
  products: CardType[] = [];
  constructor(private productsService:ProductsService) {}
  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
}
