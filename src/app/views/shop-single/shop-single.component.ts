import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CardType} from '../../../types/card.type';
import {ProductsService} from '../../shared/services/products.service';
import {CommonModule} from '@angular/common';
import {ProductCardComponent} from '../../shared/components/product-card/product-card.component';
import {SubscribeComponent} from '../../shared/components/subscribe/subscribe.component';
import {CartService} from '../../shared/services/cart.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-shop-single',
  imports: [CommonModule, ProductCardComponent, SubscribeComponent, FormsModule],
  templateUrl: './shop-single.component.html',
  styleUrl: './shop-single.component.scss'
})
export class ShopSingleComponent implements OnInit {
  products: CardType[] = [];
  product: CardType | undefined;
  relatedProducts: CardType[] = [];
  quantityInput: number | string = '';
  descriptionBtn: boolean = true;
  additionalBtn: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService, private cartService: CartService, private route: Router) {
    this.products = this.productsService.products();
    this.relatedProducts = this.productsService.getRandomProducts(4);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.product = this.products.find(item => parseInt(params['id']) === item.id);
      if (this.product?.quantity) {
        this.quantityInput = this.product.quantity;
      }
    });
  }

  addToCart() {
    if (this.product?.quantity) {
      this.cartService.setCount(parseInt(this.quantityInput.toString()) - this.product.quantity);
    } else {
      this.cartService.setCount(parseInt(this.quantityInput.toString()));
    }
    this.product!.quantity = parseInt(this.quantityInput.toString());
    let addedToCard = this.product;
    this.productsService.products.update(() => this.productsService.products().map(update => update.id === addedToCard?.id ? addedToCard : update));
    this.route.navigate(['/shop']);
  }

  toggleActiveClass() {
    this.descriptionBtn = !this.descriptionBtn;
    this.additionalBtn = !this.additionalBtn;
  }
}
