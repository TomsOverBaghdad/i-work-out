import moment from 'moment';

export const dateFormat = 'MM-DD-YYYY';

export function dateToString(date) {
	return moment(date).format(dateFormat);
}

export function matchDateToMoment(date, dateMoment) {
	return dateToString(date) === dateMoment.format(dateFormat);
}

/**
 * Generates a UUID.
 * @see https://gist.github.com/jed/982883
 * @param a - placeholder
 * @returns {string}
 */
export function generateUUID(a) {
	// @ts-ignore
	return a
		? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
		: ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, generateUUID);
}
