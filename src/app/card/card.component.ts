import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  title = 'My Card Title';
  text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.';

  ngOnInit() {}

  getInfo(): string {
    return 'This is my info';
  }

  changeTitle() {
    this.card.title = 'Title has been changed';
  }

  // inputHandler(value: string) {
  //   this.title = value;
  // }
}
