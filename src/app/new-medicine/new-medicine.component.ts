import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipesDataService } from '../services/recipes-data.service';

@Component({
  selector: 'app-new-medicine',
  templateUrl: './new-medicine.component.html',
  styleUrls: ['./new-medicine.component.scss']
})
export class NewMedicineComponent implements OnInit {

  @Output() medicine = new EventEmitter();

  showForm = false;

  constructor(private recipeDataService: RecipesDataService) { }

  ngOnInit(): void {
  }

  onSubmit(myForm: any) {
    const fields = myForm.form.controls;
    this.showForm = false;
    this.recipeDataService.addMedicine({
      name: fields.name.value,
      medicineType: fields.medicineType.value,
      recipeNumb: fields.recipeNumb.value
  });
}
}
