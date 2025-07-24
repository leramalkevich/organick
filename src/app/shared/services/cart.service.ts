import {Injectable, signal} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private count:number = 0;
  count$:Subject<number>=new Subject<number>();
  setCount(count:number){
    this.count = this.count + count;
    this.count$.next(this.count);
  }

  constructor() { }
}
