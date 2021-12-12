import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateAndUpdateComponent } from './components/create-and-update/create-and-update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateAndUpdateComponent },
  { path: 'update/:id', component: CreateAndUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
