import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipesDataService } from '../services/recipes-data.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {

  @Output() recipe = new EventEmitter();

  showForm = false;

  constructor(private recipeDataService: RecipesDataService) { }

  ngOnInit(): void {
  }

  onSubmit(myForm: any) {
    const fields = myForm.form.controls;
    this.showForm = false;
    this.recipeDataService.addRecipe({
      recipeNumber: fields.recipeNumber.value,
      doctor: fields.doctor.value,
      patient: fields.patient.value,
      medicineQuantity: fields.medicineQuantity.value
    });
  }
}
