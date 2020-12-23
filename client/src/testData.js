import moment from "moment";

import { ColorPallete } from './colors';
import { generateUUID } from './utils';

export function generateTestExcercise(i, order, date = null, fillData = null) {
	if (!date) {
		date = moment();
	}

	let exercise = {};
	if (i === 0) { //running
		exercise = {
			name: 'Run',
			type: 'run',
			distance: fillData ? 3.14 : null,
			time: fillData ? moment('00:30:56', 'HH:mm:ss') : null,
		};
	}	else if (i === 1) {
		exercise = {
			name: 'Widefly Push-Ups',
			type: 'reps',
			reps: fillData ? 10 + Math.floor(Math.random() * 5) : null,
		};
	}	else if (i === 2) {
		exercise = {
			name: 'Hyper Rotated Inverse Curls',
			type: 'weight',
			weight: fillData ? 20 : null,
			reps: fillData ? 10 + Math.floor(Math.random() * 10) : null,
		};
	}	else if (i === 3) {
		exercise = {
			name: 'Super Planks',
			type: 'timed',
			time: fillData ? moment('00:01:56', 'HH:mm:ss') : null,
		};
	}	else if (i === 4) {
		exercise = {
			name: 'Standard Push-Ups',
			type: 'reps',
			reps: fillData ? 10 + Math.floor(Math.random() * 5) : null,
		};
	} else if (i === 5) {
		exercise = {
			name: 'Widefly Pull-Ups',
			type: 'reps',
			reps: fillData ? 10 + Math.floor(Math.random() * 5) : null,
		};
	} else if (i === 6) {
		exercise = {
			name: 'Diamond Push-Ups',
			type: 'reps',
			reps: fillData ? 10 + Math.floor(Math.random() * 5) : null,
		};
	} else if (i === 7) {
		exercise = {
			name: 'Hammer Curls',
			type: 'weight',
			weight: fillData ? 20 : null,
			reps: fillData ? 10 + Math.floor(Math.random() * 10) : null,
		};
	} else if (i === 8) {
		exercise = {
			name: 'Other Curls',
			type: 'weight',
			weight: fillData ? 20 : null,
			reps: fillData ? 10 + Math.floor(Math.random() * 10) : null,
		};
	} else if (i === 9) {
		exercise = {
			name: 'In and Outs',
			type: 'reps',
			reps: fillData ? 10 + Math.floor(Math.random() * 5) : null,
		};
	}
	exercise.order = order;
	exercise.id = generateUUID("");
	exercise.date = date.toDate();
	exercise.status = fillData ? 'Done' : 'To Do';
	return exercise;
}

export function generateTestWorkout(i, date = null, fillData = true) {
	if (!date) {
		date = moment();
	}

	const color = ColorPallete[['green', 'dark-blue', 'blue', 'red'][i]];
	const icon = ['running', 'dumbbell', 'people-carry', 'running'][i];
	const name = ['Run', 'Chest and Back', 'Shoulders & Arms', 'Abs'][i];
	const workout = {
	  color,
	  name,
	  icon,
	  date: date.toDate(),
	  exercises: []
	};
	const exercises = [];
	if (name === "Run") {
		exercises.push(generateTestExcercise(0, 1, date, fillData));
	} else if (name === "Chest and Back") {
		exercises.push(generateTestExcercise(1, 1, date, fillData));
		exercises.push(generateTestExcercise(4, 2, date, fillData));
		exercises.push(generateTestExcercise(5, 3, date, fillData));
		exercises.push(generateTestExcercise(6, 4, date, fillData));
		exercises.push(generateTestExcercise(1, 5, date, fillData));
		exercises.push(generateTestExcercise(4, 6, date, fillData));
		exercises.push(generateTestExcercise(5, 7, date, fillData));
		exercises.push(generateTestExcercise(6, 8, date, fillData));
	} else if (name === 'Shoulders & Arms') {
		exercises.push(generateTestExcercise(2, 1, date, fillData));
		exercises.push(generateTestExcercise(7, 2, date, fillData));
		exercises.push(generateTestExcercise(8, 3, date, fillData));
		exercises.push(generateTestExcercise(2, 4, date, fillData));
		exercises.push(generateTestExcercise(7, 5, date, fillData));
		exercises.push(generateTestExcercise(8, 6, date, fillData));
		exercises.push(generateTestExcercise(2, 7, date, fillData));
		exercises.push(generateTestExcercise(7, 8, date, fillData));
		exercises.push(generateTestExcercise(8, 9, date, fillData));
	} else if (name === 'Abs') {
		exercises.push(generateTestExcercise(3, 1, date, fillData));
		exercises.push(generateTestExcercise(9, 2, date, fillData));
		exercises.push(generateTestExcercise(3, 3, date, fillData));
	}
	workout.exercises = exercises;
	workout.exercises[0].status = 'In Progress';
	return workout;
}

export function generateTestWorkouts() {
  const workouts = [];
  const month = 11;
  let day = 1;
  while (day <= 24) {
    const date = moment();
    date.set('month', month);
    date.set('date', day);
    const r = Math.floor(Math.random() * 3);
    workouts.push(generateTestWorkout(r, date));
    day++; //Math.ceil(Math.random() * 2);
  }
  console.log({workouts})
  return workouts;
};
