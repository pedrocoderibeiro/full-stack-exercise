import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratorPageComponent } from './components/generator-page/generator-page/generator-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'generator-page', pathMatch: 'full' },
  {
    path: 'generator-page',
    component: GeneratorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
