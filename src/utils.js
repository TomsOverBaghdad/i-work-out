import moment from 'moment';

import type { Moment } from './types';

export function matchDateToMoment(date: Date, dateMoment: Moment) {
  return moment(date).format('MM/DD/YYYY') === dateMoment.format('MM/DD/YYYY');
}
