import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesDataService } from '../services/recipes-data.service';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.scss']
})
export class MedicineListComponent implements OnInit {

  medicines!: any[];
  recipeNumb!: number;

  constructor(private recipeDataService: RecipesDataService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.recipeNumb = params['recipeId'];
        this.getMedicines(this.recipeNumb);
      }
    );
  }

  getMedicines(numb: number) {
    const recipeNumb = +numb;
    this.recipeDataService.getMedicines(recipeNumb).subscribe(
      (medicines) => {
        this.medicines = medicines;
      }
    );
  }
}