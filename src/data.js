
const EVENTS_AMOUNT = 5;
const MS_IN_DAY = 24 * 60 * 60 * 1000;
const MAX_PERIOD = 2 * MS_IN_DAY / 24;
const PHOTO_AMOUNT = 5;
const MAX_PRICE = 20;

const getRamdomElement = ((elements) => elements[Math.floor(Math.random() * elements.length)]);

const getRamdomValue = ((max, min = 0) => Math.floor(Math.random() * (max - min) + min));

const getRandomBoolean = (() => Boolean(Math.round(Math.random())));

const getTime = () => {
  const period = getRamdomValue(MAX_PERIOD);
  const day = Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000 + Math.floor(Math.random() * 24) * 60 * 60 * 1000;
  return {
    day,
    period,
  };
};

export const getEvent = () => ({
  type: getRamdomElement([
    `bus`,
    `check-in`,
    `drive`,
    `flight`,
    `restaurant`,
    `ship`,
    `sightseeing`,
    `taxi`,
    `train`,
    `transport`,
  ]),
  city: getRamdomElement([
    `Amsterdam`,
    `Geneva`,
    `Charmonix`,
  ]),
  sightseeingPhotos: new Array(getRamdomValue(PHOTO_AMOUNT)).fill(``).map(() =>`http://picsum.photos/300/150?r=${Math.random()}`),
  description: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`
  ].splice(Math.floor(Math.random() * 5), 1 + Math.round(Math.random() * 3)).join(``),
  time: getTime(),
  price: getRamdomValue(MAX_PRICE),
  offers: [
    {
      title: `Add luggage`,
      price: 10,
      usage: getRandomBoolean(),
    },
    {
      title: `Switch to comfort class`,
      price: 150,
      usage: getRandomBoolean(),
    },
    {
      title: `Add meal`,
      price: 2,
      usage: getRandomBoolean(),
    },
  ],
});

export const getSorting = () => ({
  day: false,
  event: true,
  time: true,
  price: true,
  offers: false,
});

export const getFilter = () => ([
  `everything`,
  `feature`,
  `past`
]);

export const getMenu = () => ([
  `Table`,
  `Stats`
]);

export const currentEvents = new Array(EVENTS_AMOUNT).fill(``).map(getEvent).sort((a, b) => {
  if (a.time.day < b.time.day) {
    return -1;
  }
  if (a.time.day > b.time.day) {
    return 1;
  }
  return 0;
});
export const editingEvent = new Array(1).fill(``).map(getEvent);

export const getRoutInfo = () => ({
  startPoint: currentEvents[0].city,
  endPoint: currentEvents[currentEvents.length - 1].city,
  startDate: currentEvents[0].time.day,
  endDate: currentEvents[currentEvents.length - 1].time.day + currentEvents[currentEvents.length - 1].time.period,
});

export const totalCost = currentEvents.reduce((accum, value) => {
  return accum + value.price + value.offers.filter((offer) => offer.usage).reduce((a, v) => (a + v.price), 0);
}, 0);
