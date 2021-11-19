import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GDynamicCComponent } from './g-dynamic-c/g-dynamic-c.component';
import { GDynamicC1Component } from './g-dynamic-c1/g-dynamic-c1.component';

const routes: Routes = [
  {
    path: '',
    component: GDynamicC1Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
