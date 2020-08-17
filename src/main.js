import {createSiteMenuTemplate} from './view/menu';
import {createFilterTemplate} from './view/filter';
import {createSortTemplate} from './view/sort';
import {createEventFormTemplate} from './view/event-edit';
import {createEventPointTemplate} from './view/event';
import {createTripValueTemplate} from './view/trip-value';
import {createTripInfoTemplate} from './view/trip-info';
import {createTripDayContainerTemplate} from './view/trip-day-container';
import {createTripContainerTemplate} from './view/trip-container';
import {createTripDayInfoTemplate} from './view/trip-day-info';
import {createTripInfoContainerTemplate} from './view/trip-info-container';

const POINT_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainContainer = document.querySelector(`.page-body`);
const siteHeader = siteMainContainer.querySelector(`.page-header .trip-main`);
const siteHeaderControls = siteHeader.querySelector(`.trip-controls`);
const siteHeaderTitle = siteHeaderControls.querySelector(`h2`);
const eventContainer = siteMainContainer.querySelector(`.trip-events`);

render(siteHeader, createTripInfoContainerTemplate(), `afterbegin`);

const tripInfoContainer = siteHeader.querySelector(`.trip-info`);
render(tripInfoContainer, createTripInfoTemplate(), `beforeend`);
render(tripInfoContainer, createTripValueTemplate(), `beforeend`);

render(siteHeaderTitle, createSiteMenuTemplate(), `afterend`);
render(siteHeaderControls, createFilterTemplate(), `beforeend`);
render(eventContainer, createSortTemplate(), `beforeend`);
render(eventContainer, createEventFormTemplate(), `beforeend`);

render(eventContainer, createTripContainerTemplate(), `beforeend`);

const tripContainer = siteMainContainer.querySelector(`.trip-days`);
render(tripContainer, createTripDayContainerTemplate(), `beforeend`);

const tripDayInfoContainer = tripContainer.querySelector(`.day`);
render(tripDayInfoContainer, createTripDayInfoTemplate(), `afterbegin`);

const tripDayContainer = siteMainContainer.querySelector(`.trip-events__list`);
for (let i = 0; i < POINT_COUNT; i++) {
  render(tripDayContainer, createEventPointTemplate(), `beforeend`);
}


