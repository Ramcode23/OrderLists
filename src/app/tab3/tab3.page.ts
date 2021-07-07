import { Component } from '@angular/core';
import { Order } from '../models/orders.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  orders: Order[] = [];
  doneOrders: Order[] = [];

  constructor() {
    this.loadOrderDone();
  }

  ngOnInit() {

 }

  ionViewWillEnter(){
    this.loadOrderDone();
  }

  doneOrder(index:number){
    this.orders[index].done=true
    this.doneOrders.push(this.orders[index])
    console.log(this.orders);
    
    localStorage.setItem('doneOrders', JSON.stringify(this.doneOrders));
    localStorage.setItem('orders', JSON.stringify(this.orders.filter(order=>order.done==false)));
    this.loadOrderDone();

  }
  
  loadOrderDone() {
    this.orders = JSON.parse(localStorage.getItem('orders'));
    this.orders=  this.orders.filter(order=>order.done==false);
  }



}
