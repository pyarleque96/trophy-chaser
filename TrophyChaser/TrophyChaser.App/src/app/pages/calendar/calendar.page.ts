import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import { events } from 'src/app/services/events';
import { EventCalendar } from '../../models/eventCalendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  @ViewChild(CalendarComponent, {static: true}) public myCal: CalendarComponent;

  public eventSource: EventCalendar[];
  public viewTitle: string;
  public calendar: {mode: string, currentDate: Date};

  constructor() { 
    this.eventSource = [];
    this.calendar = {
      mode: 'month',
      currentDate: new Date()
    };
  }

  ngOnInit() {
  }

  next() {
    this.myCal.slideNext();
  }

  back() {
    this.myCal.slidePrev();
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  createRandomEvents() {
    this.eventSource = events;
  }

  removeEvents() {
    this.eventSource = [];
  }

}
