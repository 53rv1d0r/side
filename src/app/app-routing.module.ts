import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './articulos/articulos.component';

const routes: Routes = [
  { path: 'articulos', component: ArticulosComponent },
  { path: 'colaboradores', component: ArticulosComponent },
  { path: '**', redirectTo:'/', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
