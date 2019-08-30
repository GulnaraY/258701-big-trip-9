// Фильтры
import {getFilter} from '../data.js';
export const createFiltersLayout = () => {
  const filterLayout = getFilter().map((filter) => `<div class="trip-filters__filter">
  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter}" ${filter === `everything` ? `checked` : ``}>
  <label class="trip-filters__filter-label" for="filter-everything">${filter}</label>
</div>`).join(``);
  return `<form class="trip-filters" action="#" method="get">
    ${filterLayout}
  <button class="visually-hidden" type="submit">Accept filter</button>
</form>`;
};
