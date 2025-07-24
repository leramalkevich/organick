import {Component, OnInit, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  activeInput = signal(false);
  header = signal(false);
  cart:number = 0;

  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.cartService.count$
      .subscribe(count=>{
        this.cart = count;
      });
  }

  onFocus() {
    this.activeInput.update(value => true);
    this.header.update(value => true);
  }

  onBlur() {
    this.activeInput.update(value => false);
    this.header.update(value => false);
  }
}
