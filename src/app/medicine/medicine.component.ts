import { Component, Input, OnInit } from '@angular/core';
import { RecipesDataService } from '../services/recipes-data.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {
  @Input() medicine: any;
  @Input() medicineIndex!: number;

  showInfo = false;

  constructor(private recipeDataService: RecipesDataService) { }

  ngOnInit(): void {
  }

  delMedicine() {
    this.recipeDataService.deleteMedicine(this.medicineIndex);
  }

}
