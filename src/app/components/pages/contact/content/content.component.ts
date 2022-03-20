import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/carttem.model';
import { SessionService } from 'src/app/session.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(public ss: SessionService) { }

  removeItem(data: CartItem) {
    this.ss.modify(data.item, data.quantity);
  }


  someFunction(event: any, data: CartItem) {
    let newVal = event.target.value;
  }

  increment(data: CartItem) {
    this.ss.add(data.item, 1);
  }

  decrement(data: CartItem) {
    if (data.quantity - 1 <= 0) {
      this.removeItem(data);
    } else this.ss.modify(data.item, data.quantity - 1);
  }

  getProcessedCart() {
    let content = "";
    this.ss.getCart().forEach(data => {
      content += `${data.item.title} * ${data.quantity} \n`
    });

    return content;
  }

  ngOnInit(): void {
  }

}
