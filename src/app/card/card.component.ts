import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  title = 'My Card Title';
  mySampleText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.';

  disabled = false;

  imgUrl = 'https://angular.io/assets/images/logos/angular/angular.png';

  ngOnInit() {
    setTimeout(() => {
      this.imgUrl = 'https://cdn.auth0.com/blog/madlibs/Logo.png';
      this.disabled = true;
    }, 3000);
  }

  getInfo(): string {
    return 'This is my info';
  }

}
