
import {getMenu} from '../data.js';
// Основное меню
export const createMenuLayout = () => {
  const siteMenu = getMenu().map((menuElement) => `<a class="trip-tabs__btn  ${menuElement === `Table` ? `trip-tabs__btn--active` : ``} href="#">${menuElement}</a>`).join(``);
  return `<nav class="trip-controls__trip-tabs  trip-tabs">
  ${siteMenu}
  </nav>`;
};
