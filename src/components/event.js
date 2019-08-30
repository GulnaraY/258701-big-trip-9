
// Карточка поездки
const ICONS_PATH = `img/icons/`;
const ICONS_TYPE = `.png`;

export const makeEvent = ({type, city, price, time, offers}) => {
  return `<li class="trip-events__item">
  <div class="event">
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src= ${ICONS_PATH + type + ICONS_TYPE} alt="Event type icon">
    </div>
    <h3 class="event__title">${type === `sightseeing` || type === `restaurant` || type === `check-in` ? `${type} in ` : `${type}  to `} ${city}</h3>

    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="2019-03-18T10:30">${new Date(time.day).getHours()}:${new Date(time.day).getMinutes()}</time>
        &mdash;
        <time class="event__end-time" datetime="2019-03-18T11:00">${new Date(time.day + time.period).getHours()}:${new Date(time.day + time.period).getMinutes()}</time>
      </p>
      <p class="event__duration">${Math.floor(time.period / 1000 / 60 / 60)}H ${new Date(time.period).getMinutes()}M</p>
    </div>

    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${price}</span>
    </p>

    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      ${offers.filter((item) => item.usage).map((offer) => `<li class="event__offer">
      <span class="event__offer-title">${offer.title}</span>
      &plus;
      &euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
     </li>`).join(``)}
    </ul>

    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>`;
};
