import { EventCalendar } from "../models/eventCalendar";

export const events: EventCalendar[] = [
    {
        title: 'Event 1',
        startTime: new Date('2021-07-22T14:00:00'),
        endTime: new Date('2021-07-22T15:00:00'),
        allDay: false
    },
    {
        title: 'Event 2',
        startTime: new Date('2021-07-22T13:00:00'),
        endTime: new Date('2021-07-22T14:00:00'),
        allDay: false
    },
    {
        title: 'Event 3',
        startTime: new Date('2021-07-22T16:00:00'),
        endTime: new Date('2021-07-22T19:00:00'),
        allDay: false
    },
    {
        title: 'Event 4',
        startTime: new Date('2021-08-01T13:00:00'),
        endTime: new Date('2021-08-01T15:00:00'),
        allDay: false
    },
    {
        title: 'Event 6',
        startTime: new Date('2021-07-02T00:00:00'),
        endTime: new Date('2021-07-04T00:00:00'),
        allDay: false
    }
]