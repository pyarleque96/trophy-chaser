export class EventCalendar {
    constructor(
        public title: string,
        public startTime: Date,
        public endTime: Date,
        public allDay: false
    ) {}
}