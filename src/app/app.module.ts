import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';
import { RecipeComponent } from './recipe/recipe.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MedicineComponent } from './medicine/medicine.component';
import { NewMedicineComponent } from './new-medicine/new-medicine.component';

const routes: Routes = [
  {path: 'recipes', component: RecipeListComponent},
  {path: 'medicines/:recipeId', component: MedicineListComponent},
  {path: '', redirectTo: 'recipes', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    RecipeComponent,
    NewRecipeComponent,
    RecipeListComponent,
    MedicineListComponent,
    MedicineComponent,
    NewMedicineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
