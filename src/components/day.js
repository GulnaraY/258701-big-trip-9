// День путешествия

import {createEventLayout} from './event';

const DAYS_COUNT = 3;

export const createDayLayout = () => {

  const eventsLayout = new Array(DAYS_COUNT).fill(``).map(() => {
    return `${createEventLayout()}`;
  });

  const layoutParts = [
    `<li class="trip-days__item  day">
    <div class="day__info">
      <span class="day__counter">1</span>
      <time class="day__date" datetime="2019-03-18">MAR 18</time>
    </div>
    <ul class="trip-events__list">`,
    eventsLayout.join(``),
    `</ul>
    </li>`
  ];

  return layoutParts.join(``);
};
