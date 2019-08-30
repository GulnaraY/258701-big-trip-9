// Информация о поездке
import {getRoutInfo, totalCost} from '../data.js';

export const createTripInfoLayout = () => {
  const routInfo = getRoutInfo();

  return `<div class="trip-info__main">
  <h1 class="trip-info__title">${routInfo.startPoint} &mdash; ... &mdash; ${routInfo.endPoint}</h1>
  <p class="trip-info__dates">${new Date(routInfo.startDate).getMonth()} ${new Date(routInfo.startDate).getDate()}&nbsp;&mdash;&nbsp;${new Date(routInfo.endDate).getDate()}</p>
  </div>
  <p class="trip-info__cost">
  Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalCost}</span>
  </p>`;
};
