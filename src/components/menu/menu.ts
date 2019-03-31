import { Component } from '@angular/core';

/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {

  text: string;

  constructor() {
    console.log('Hello MenuComponent Component');
    this.text = 'Hello World';
  }

}
