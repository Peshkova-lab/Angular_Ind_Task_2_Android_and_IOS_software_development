import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipesDataService } from '../services/recipes-data.service';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input() recipe: any;
  @Input() recipeIndex!: number;
  @Output() onDoctorEdit = new EventEmitter();
 
  showInfo = false;

  images = [
    'https://www.collinsdictionary.com/images/full/medicine_524556844_1000.jpg',
    'https://ichef.bbci.co.uk/news/976/cpsprodpb/FF89/production/_120371456_gettypills.jpg',
    'https://images.newscientist.com/wp-content/uploads/2019/06/18153152/medicineshutterstock_1421041688.jpg',
  ];

  curImageIndex = 0;
  curImage: string = this.images[0];

  constructor(private recipeDataService: RecipesDataService) { }

  changeCurImage(forward: boolean) {
    if (forward) {
      this.curImageIndex++;
    } else {
      this.curImageIndex--
    }
    if (this.curImageIndex >= this.images.length) {
      this.curImageIndex = 0;
    }
    if (this.curImageIndex < 0) {
      this.curImageIndex = this.images.length - 1;
    }
    this.curImage =  this.images[this.curImageIndex];
  }

  ngOnInit(): void {
    this.curImage = this.images[this.curImageIndex];
    setInterval(()=> {
      this.changeCurImage(true);
  }, 10000);

  }

  onChangeDoctor() {
    this.onDoctorEdit.emit(new Date());
  }
  
  delRecipe() {
    this.recipeDataService.deleteRecipe(this.recipeIndex);
  }

}
