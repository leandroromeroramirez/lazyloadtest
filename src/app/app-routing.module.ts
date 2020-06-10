import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home', loadChildren: () =>
      import('./@pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'section', loadChildren: () =>
      import('./@pages/section/section.module').then(m => m.SectionModule)
  },
  {
    path: 'megaland', loadChildren: () =>
      import('./@pages/megaland/megaland.module').then(m => m.MegalandModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
