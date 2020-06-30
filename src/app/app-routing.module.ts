import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', loadChildren: () =>
      import('./@pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'megaland', loadChildren: () =>
      import('./@pages/megaland/megaland.module').then(m => m.MegalandModule)
  },
  {
    path: 'top-20', loadChildren: () =>
      import('./@pages/top20/top20.module').then(m => m.Top20Module)
  },
  {
    path: 'top20', loadChildren: () =>
      import('./@pages/top20/top20.module').then(m => m.Top20Module)
  },
  {
    path: 'tendencias', loadChildren: () =>
      import('./@pages/tends/tends.module').then(m => m.TendsModule)
  },
  {
    matcher: (url) => {
      console.log(url);
      const path = url && url[0] && url [0].path || '';
      if (path.startsWith('famosos')
        || path.startsWith('paranormal')
        || path.startsWith('educacion')
        || path.startsWith('megaplaneta')) {
        return {consumed: [url[0]]};
      }
      return null;
    },
    loadChildren: () => import('./@pages/section/section.module').then(m => m.SectionModule)
  },
  {path: 'home', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
