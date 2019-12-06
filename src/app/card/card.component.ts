import {Component} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  title = 'My Card Title';
  mySampleText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.';

  number = 42;

  obj = {
    name: 'Sergey',
    info: {
      age: 29,
      job: 'Frontend'
    }
  };

}
