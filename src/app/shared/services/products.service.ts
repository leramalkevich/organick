import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProducts(){
    return [
      {
        id: 1,
        category: 'Vegetable',
        image: 'product1.png',
        title: 'Calabrese Broccoli',
        oldPrice: '$20.00',
        newPrice: '$13.00',
        reviews: 5
      },
      {
        id: 2,
        category: 'Fresh',
        image: 'product2.png',
        title: 'Fresh Banana Fruites',
        oldPrice: '$20.00',
        newPrice: '$14.00',
        reviews: 5
      },
      {
        id: 3,
        category: 'Millets',
        image: 'product3.png',
        title: 'White Nuts',
        oldPrice: '$20.00',
        newPrice: '$15.00',
        reviews: 5
      },
      {
        id: 4,
        category: 'Vegetable',
        image: 'product4.png',
        title: 'Vegan Red Tomato',
        oldPrice: '$20.00',
        newPrice: '$17.00',
        reviews: 5
      },
      {
        id: 5,
        category: 'Health',
        image: 'product5.png',
        title: 'Mung Bean',
        oldPrice: '$20.00',
        newPrice: '$11.00',
        reviews: 5
      },
      {
        id: 6,
        category: 'Nuts',
        image: 'product6.png',
        title: 'Brown Hazelnut',
        oldPrice: '$20.00',
        newPrice: '$12.00',
        reviews: 5
      },
      {
        id: 7,
        category: 'Fresh',
        image: 'product7.png',
        title: 'Eggs',
        oldPrice: '$20.00',
        newPrice: '$17.00',
        reviews: 5
      },
      {
        id: 8,
        category: 'Fresh',
        image: 'product8.png',
        title: 'Zelco Suji Elaichi Rusk',
        oldPrice: '$20.00',
        newPrice: '$15.00',
        reviews: 5
      },
      {
        id: 9,
        category: 'Vegetable',
        image: 'product9.png',
        title: 'Mung Bean',
        oldPrice: '$20.00',
        newPrice: '$11.00',
        reviews: 5
      },
      {
        id: 10,
        category: 'Vegetable',
        image: 'product10.png',
        title: 'Brown Hazelnut',
        oldPrice: '$20.00',
        newPrice: '$12.00',
        reviews: 5
      },
      {
        id: 11,
        category: 'Vegetable',
        image: 'product11.png',
        title: 'Onion',
        oldPrice: '$20.00',
        newPrice: '$17.00',
        reviews: 5
      },
      {
        id: 12,
        category: 'Vegetable',
        image: 'product12.png',
        title: 'Cabbage',
        oldPrice: '$20.00',
        newPrice: '$17.00',
        reviews: 5
      },
      {
        id: 13,
        category: 'Health',
        image: 'product13.png',
        title: 'Mung Bean',
        oldPrice: '$20.00',
        newPrice: '$11.00',
        reviews: 5
      },
      {
        id: 14,
        category: 'Nuts',
        image: 'product14.png',
        title: 'White Hazelnut',
        oldPrice: '$20.00',
        newPrice: '$12.00',
        reviews: 5
      },
      {
        id: 15,
        category: 'Fresh',
        image: 'product15.png',
        title: 'Fresh Corn',
        oldPrice: '$20.00',
        newPrice: '$17.00',
        reviews: 5
      },
      {
        id: 16,
        category: 'Fresh',
        image: 'product16.png',
        title: 'Organic Almonds',
        oldPrice: '$20.00',
        newPrice: '$15.00',
        reviews: 5
      }
    ];
  }
  getRandomProducts(number:number){
    let offeredProducts = this.getProducts().sort(()=> 0.5 - Math.random());
    return offeredProducts.slice(0, number);
  }

  constructor() { }
}
