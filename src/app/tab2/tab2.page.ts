import { Component } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Dish, Order } from '../models/orders.model';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  dishes: Dish[] = [];
  orders: Order[] = [];
  constructor(private ordersService: OrdersService) {

    this.dishes = this.ordersService.getDishes();
    if (localStorage.getItem('orders')) {

      this.orders =JSON.parse( localStorage.getItem('orders'));

    }
  }


  search(text: any) {

    const val = text.target.value;
    this.dishes = this.ordersService.getDishes();
    if (val.length > 0) {

      return this.dishes = this.dishes.filter(dish => dish.desc.toLowerCase().includes(val.toLowerCase()));
    }

    return this.dishes;


  }


  addToKitchen(dish: Dish) {
    const { desc } = dish;
    this.orders.push({ desc, done: false });

    localStorage.setItem('orders', JSON.stringify(this.orders))
    console.log(this.orders);

  }

}


