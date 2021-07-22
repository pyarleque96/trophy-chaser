(self["webpackChunkTrophyChaser_App"] = self["webpackChunkTrophyChaser_App"] || []).push([["src_app_pages_calendar_calendar_module_ts"],{

/***/ 9015:
/*!***********************************************************!*\
  !*** ./src/app/pages/calendar/calendar-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarPageRoutingModule": () => (/* binding */ CalendarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.page */ 4193);




const routes = [
    {
        path: '',
        component: _calendar_page__WEBPACK_IMPORTED_MODULE_0__.CalendarPage
    }
];
let CalendarPageRoutingModule = class CalendarPageRoutingModule {
};
CalendarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CalendarPageRoutingModule);



/***/ }),

/***/ 6650:
/*!***************************************************!*\
  !*** ./src/app/pages/calendar/calendar.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarPageModule": () => (/* binding */ CalendarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-routing.module */ 9015);
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.page */ 4193);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/angular */ 2955);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/daygrid */ 3520);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/interaction */ 9549);










_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_4__.FullCalendarModule.registerPlugins([
    _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__.default,
    _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_3__.default
]);
let CalendarPageModule = class CalendarPageModule {
};
CalendarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalendarPageRoutingModule,
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_4__.FullCalendarModule
        ],
        declarations: [_calendar_page__WEBPACK_IMPORTED_MODULE_1__.CalendarPage]
    })
], CalendarPageModule);



/***/ }),

/***/ 4193:
/*!*************************************************!*\
  !*** ./src/app/pages/calendar/calendar.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarPage": () => (/* binding */ CalendarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_calendar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./calendar.page.html */ 4955);
/* harmony import */ var _calendar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.page.scss */ 6685);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let CalendarPage = class CalendarPage {
    constructor() {
        this.calendarOptions = {
            initialView: 'dayGridMonth',
            dateClick: this.handleDateClick.bind(this),
            events: [
                { title: 'event 1', date: '2021-07-21' },
                { title: 'event 2', date: '2019-04-02' }
            ]
        };
    }
    ngOnInit() {
        this.toggleWeekends();
    }
    handleDateClick(arg) {
        alert('date click! ' + arg.dateStr);
    }
    toggleWeekends() {
        this.calendarOptions.weekends = !this.calendarOptions.weekends;
    }
};
CalendarPage.ctorParameters = () => [];
CalendarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-calendar',
        template: _raw_loader_calendar_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_calendar_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CalendarPage);



/***/ }),

/***/ 6685:
/*!***************************************************!*\
  !*** ./src/app/pages/calendar/calendar.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card {\n  padding: 30px;\n}\n\nfull-calendar {\n  min-width: 200px;\n  min-height: 402px;\n}\n\nfull-calendar table a {\n  color: #2a4d4b !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0FBQUoiLCJmaWxlIjoiY2FsZW5kYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuICBcclxuZnVsbC1jYWxlbmRhciB7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgbWluLWhlaWdodDogNDAycHg7ICAgIFxyXG59XHJcblxyXG5mdWxsLWNhbGVuZGFyIHRhYmxlIGEge1xyXG4gICAgY29sb3I6ICMyYTRkNGIgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 4955:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calendar/calendar.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"tc-header\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"home\" text=\"\" icon=\"arrow-back\" mode=\"md\"></ion-back-button>\n      </ion-buttons>\n      <ion-button>\n        <span class=\"tc-header__title\">Calendar</span>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <full-calendar [options]=\"calendarOptions\"></full-calendar>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_calendar_calendar_module_ts.js.map