// День путешествия

import {makeEditingEvent} from './editing-event.js';
import {makeEvent} from './event.js';
import {editingEvent} from '../data.js';
let isFirstRender = true;

export const createDayLayout = (events) => {

  const eventsLayout = events.map(makeEvent).join(``);
  const editingLayout = editingEvent.map(makeEditingEvent).join(``);

  const layout = `<ul class="trip-events__list">
    ${isFirstRender ? editingLayout : ``}
    ${eventsLayout}
    </ul>`;
  isFirstRender = false;
  return layout;
};
