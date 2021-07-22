import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';

import { TasksPageRoutingModule } from './tasks-routing.module';

import { TasksPage } from './tasks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasksPageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    TasksPage
  ]
})
export class TasksPageModule {}
