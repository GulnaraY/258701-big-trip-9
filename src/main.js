// Импорт
import {createTripInfoLayout} from './components/trip-info.js';
import {createMenuLayout} from './components/site-menu.js';
import {createFiltersLayout} from './components/filters.js';
import {createEventEditingLayout} from './components/editing-event.js';
import {createSortingLayout} from './components/sorting.js';
import {createDaysContainer} from './components/days-container.js';
import {createDayLayout} from './components/day.js';
import {createEventLayout} from './components/event.js';


// Функция рендера
const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

// Рендеринг элементов на страницу
const tripMain = document.querySelector(`.trip-main`);
const tripInfoContainer = tripMain.querySelector(`.trip-info`);
render(tripInfoContainer, createTripInfoLayout(), `afterbegin`);

const tripControlsFirstHeader = tripMain.querySelector(`.trip-controls h2:first-child`);
const tripControlsSecondtHeader = tripMain.querySelector(`.trip-controls h2:nth-child(2)`);
render(tripControlsFirstHeader, createMenuLayout(), `afterend`);
render(tripControlsSecondtHeader, createFiltersLayout(), `afterend`);

const tripEventsContainer = document.querySelector(`.trip-events`);
render(tripEventsContainer, createSortingLayout());
render(tripEventsContainer, createEventEditingLayout());
render(tripEventsContainer, createDaysContainer());

const daysContainer = tripEventsContainer.querySelector(`.trip-days`);
render(daysContainer, createDayLayout());

const eventsContainer = tripEventsContainer.querySelector(`.trip-events__list`);
new Array(3).fill(``).forEach(() => render(eventsContainer, createEventLayout()));
