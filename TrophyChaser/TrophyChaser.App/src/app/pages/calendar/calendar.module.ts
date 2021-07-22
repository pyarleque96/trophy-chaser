import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';
import { CalendarPageRoutingModule } from './calendar-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { NgCalendarModule  } from 'ionic2-calendar';


import { CalendarPage } from './calendar.page';



@NgModule({
  declarations: [
    CalendarPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    ComponentsModule,
    NgCalendarModule
  ],
  entryComponents: [
    CalendarPage
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class CalendarPageModule {}
