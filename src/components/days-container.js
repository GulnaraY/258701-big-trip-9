// Контейнер для дней
import {createDayLayout} from './day.js';
import {currentEvents} from '../data.js';

let previousValue = ``;
const dates = currentEvents.map((event) => new Date(event.time.day).toDateString()).filter((value) => {
  if (previousValue === value) {
    return false;
  }
  previousValue = value;
  return true;
});

export const createDaysContainerLayout = () => {
  const daysLayout = dates.map((day, i) => {
    return `<li class="trip-days__item  day">
    <div class="day__info">
      <span class="day__counter">${i + 1}</span>
      <time class="day__date" datetime="2019-03-18">${day}</time>
    </div>
    ${createDayLayout(currentEvents.filter((event) => (new Date(event.time.day).toDateString() === day)))}
    </li>`;
  }).join(``);

  const layout =
    `<ul class="trip-days">
    ${daysLayout}
    </ul>`;

  return layout;
};
