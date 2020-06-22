import moment from "moment";

import { ColorPallete } from './colors';
// import { Types } from './Exercise';

function generateTestExcercise(i, order) {
	let exercise = {};
	if (i === 0) { //running
		exercise = {
			name: 'Run',
			type: 'run',
			distance: 3.14,
			time: moment('00:30:56', 'HH:mm:ss'),
		};
	}	else if (i === 1) {
		exercise = {
			name: 'Widefly Push-Ups',
			type: 'reps',
			reps: 10 + Math.floor(Math.random() * 5),
		};
	}	else if (i === 2) {
		exercise = {
			name: 'Hyper Rotated Inverse Curls',
			type: 'weight',
			reps: 10 + Math.floor(Math.random() * 10),
		};
	}	else if (i === 3) {
		exercise = {
			name: 'Super Planks',
			type: 'timed',
			time: moment('00:01:56', 'HH:mm:ss'),
		};
	}	else if (i === 4) {
		exercise = {
			name: 'Standard Push-Ups',
			type: 'reps',
			reps: 10 + Math.floor(Math.random() * 5),
		};
	} else if (i === 5) {
		exercise = {
			name: 'Widefly Pull-Ups',
			type: 'reps',
			reps: 10 + Math.floor(Math.random() * 5),
		};
	} else if (i === 6) {
		exercise = {
			name: 'Diamond Push-Ups',
			type: 'reps',
			reps: 10 + Math.floor(Math.random() * 5),
		};
	} else if (i === 7) {
		exercise = {
			name: 'Hammer Curls',
			type: 'weight',
			reps: 10 + Math.floor(Math.random() * 10),
		};
	} else if (i === 8) {
		exercise = {
			name: 'Other Curls',
			type: 'weight',
			reps: 10 + Math.floor(Math.random() * 10),
		};
	} else if (i === 9) {
		exercise = {
			name: 'In and Outs',
			type: 'reps',
			reps: 10 + Math.floor(Math.random() * 5),
		};
	}
	exercise.order = order;
	return exercise;
}

export function generateTestWorkout(i, date = null) {
	if (!date) {
		date = moment();
	}

	const color = Object.keys(ColorPallete)[i];
	const icon = ['running', 'dumbbell', 'people-carry', 'running'][i];
	const name = ['Run', 'Chest and Back', 'Shoulders & Arms', 'Abs'][i];
	const workout = {
	  color,
	  name,
	  icon,
	  date: date.toDate(),
	  exercises: []
	}
	const exercises = [];
	if (name === "Run") {
		exercises.push(generateTestExcercise(0, 1))
	} else if (name === "Chest and Back") {
		exercises.push(generateTestExcercise(1, 1))
		exercises.push(generateTestExcercise(4, 2))
		exercises.push(generateTestExcercise(5, 3))
		exercises.push(generateTestExcercise(6, 4))
		exercises.push(generateTestExcercise(1, 5))
		exercises.push(generateTestExcercise(4, 6))
		exercises.push(generateTestExcercise(5, 7))
		exercises.push(generateTestExcercise(6, 8))
	} else if (name === 'Shoulders & Arms') {
		exercises.push(generateTestExcercise(2, 1))
		exercises.push(generateTestExcercise(7, 2))
		exercises.push(generateTestExcercise(8, 3))
		exercises.push(generateTestExcercise(2, 4))
		exercises.push(generateTestExcercise(7, 5))
		exercises.push(generateTestExcercise(8, 6))
		exercises.push(generateTestExcercise(2, 7))
		exercises.push(generateTestExcercise(7, 8))
		exercises.push(generateTestExcercise(8, 9))
	} else if (name === 'Abs') {
		exercises.push(generateTestExcercise(3, 1))
		exercises.push(generateTestExcercise(9, 2))
		exercises.push(generateTestExcercise(3, 3))
	}
	workout.exercises = exercises;
	return workout;
}

export function generateTestWorkouts() {
  const workouts = [];
  const month = 5;
  let day = 1;
  while (day <= 18) {
    const date = moment();
    date.set('month', month);
    date.set('date', day);
    const r = Math.floor(Math.random() * 5);
    workouts.push(generateTestWorkout(r, date));
    day++; //Math.ceil(Math.random() * 2);
  }

  return workouts;
};
