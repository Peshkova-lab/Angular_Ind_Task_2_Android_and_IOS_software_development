import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesDataService {

  recipes = [
    {
    recipeNumber: 1,
    doctor: 'Doctor_1',
    patient: 'Patient_1',
    medicineQuantity: 3
    },
    {
      recipeNumber: 2,
      doctor: 'Doctor_2',
      patient: 'Patient_2',
      medicineQuantity: 2
      },
  ];

  private medicines = [
    {name: 'Medicine_1',  medicineType: 'tablets', recipeNumb: 1},
    {name: 'Medicine_2',  medicineType: 'syrup', recipeNumb: 1},
    {name: 'Medicine_3',  medicineType: 'injections', recipeNumb: 1},
    {name: 'Medicine_1',  medicineType: 'tablets', recipeNumb: 2},
    {name: 'Medicine_2',  medicineType: 'injections', recipeNumb: 2}  
  ];

  constructor() { }

  getRecipes(): Observable<any[]> {
    return of(this.recipes);
  }
 /** 
  getMedicines(): Observable<any []> {
    return of(this.medicines);
  }
*/
 
  getMedicines(recipeNumber: number): Observable<any[]> {
    return of(this.medicines.filter(elem => {
      return elem.recipeNumb === recipeNumber;
    }));
  }
 
  addRecipe(recipe: any) {
    this.recipes.push(recipe);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }

  addMedicine(medicine: any) {
    this.medicines.push(medicine);
  }

  deleteMedicine(index: number) {
    this.medicines.splice(index, 1);
  }
}
