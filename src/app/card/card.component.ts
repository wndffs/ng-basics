import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  title = 'My Card Title';
  mySampleText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.';

  ngOnInit() {}

  getInfo(): string {
    return 'This is my info';
  }

  changeTitle() {
    this.title = 'Title has been changed';
  }

  // inputHandler(value: string) {
  //   this.title = value;
  // }
}
