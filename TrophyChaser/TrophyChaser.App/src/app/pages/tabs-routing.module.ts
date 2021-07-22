import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'calendar',
        loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
      },
      {
        path: 'tasks',
        loadChildren: () => import('./tasks/tasks.module').then( m => m.TasksPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/calendar',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/calendar',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
