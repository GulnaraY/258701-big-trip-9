// Контейнер для дней
import {createDayLayout} from './day.js';

const DAYS_AMOUNT = 2;

export const createDaysContainerLayout = () => {
  const daysLayout = new Array(DAYS_AMOUNT).fill(``).map(() => {
    return `${createDayLayout()}`;
  }).join(``);

  const layout =
    `<ul class="trip-days">
    ${daysLayout}
    </ul>`;

  return layout;
};
