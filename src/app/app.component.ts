import { Component } from '@angular/core';
import { RecipesDataService } from './services/recipes-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  lastChangeDate = new Date();

  onDataChange(event: any) {
    this.lastChangeDate = event;
  }

  recipes!: any[];
  medicines!: any[];

  constructor() {}

}