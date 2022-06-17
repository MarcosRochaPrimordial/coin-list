import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SpentListPage } from './spent-list/spent-list.page';
import { SpentPage } from './spent/spent.page';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'spent',
        component: SpentPage,
      },
      {
        path: 'spent-list',
        component: SpentListPage,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'spent',
      }
    ]
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
