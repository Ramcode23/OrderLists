import { Component } from '@angular/core';
import { Order } from '../models/orders.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  doneOrders: Order[] = [];

  constructor() {
  
   this.loadOrderDone();

  }



  ngOnInit() {

  }

  ionViewWillEnter() {
 this.loadOrderDone();
  }



  loadOrderDone() {

    if (JSON.parse(localStorage.getItem('doneOrders'))) {
      this.doneOrders = JSON.parse(localStorage.getItem('doneOrders'));
      
    }
  

  }
  remove(index: number) {
  
    this.doneOrders= this.doneOrders.filter((order,i)=>i!=index);

  localStorage.setItem('doneOrders', JSON.stringify(this.doneOrders));
    this.loadOrderDone();
  }


  search(text: any) {
  
    const val = text.target.value;
    if (val.length > 0) {

      return this.doneOrders = this.doneOrders.filter(dish => dish.desc.toLowerCase().includes(val.toLowerCase()));
    }
    return this.doneOrders;


  }


}
