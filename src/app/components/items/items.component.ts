import { Component, OnInit } from '@angular/core';
import { Item } from '../../Models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        id: 0,
        title: 'Apple',
        price: 50,
        quantity: 2,
        completed: false,
      },
      {
        id: 1,
        title: 'Bread',
        price: 35,
        quantity: 5,
        completed: true,
      },
      {
        id: 2,
        title: 'Campera',
        price: 6000,
        quantity: 1,
        completed: false,
      },
    ];
  }

  deleteItem(item: Item){
    this.items = this.items.filter(x => x.id !== item.id);
  }
}
