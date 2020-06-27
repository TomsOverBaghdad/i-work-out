import moment from "moment";

import { ColorPallete } from './colors';

//test data
import { generateTestExcercise } from './testData';
//

export const Types = {
	timed: [
		'time'
	],
	reps: [
		'reps'
	],
	weight: [
		'reps',
		'weight'
	],
	run: [
		'time',
		'distance'
	]
};

const Run = () => ({
	name: 'Run',
	icon: 'running',
	color: 'green',
	date: moment(),
	exercises: [
		{
			name: 'Run',
			type: 'run',
			distance: null,
			time: null,
		}
	],
});

const ChestAndBack = () => ({
	name: 'Chest & Back',
	icon: 'dumbbell',
	color: 'dark-blue',
	date: moment(),
	exercises: [
		generateTestExcercise(1, 1),
		generateTestExcercise(4, 2),
		generateTestExcercise(5, 3),
		generateTestExcercise(6, 4),
		generateTestExcercise(1, 5),
		generateTestExcercise(4, 6),
		generateTestExcercise(5, 7),
		generateTestExcercise(6, 8)
	],
});

const ShouldersAndArms = () => ({
	name: "Shoulders & Arms",
	icon: 'people-carry',
	color: 'blue',
	date: moment(),
	exercises: [
		generateTestExcercise(2, 1),
		generateTestExcercise(7, 2),
		generateTestExcercise(8, 3),
		generateTestExcercise(2, 4),
		generateTestExcercise(7, 5),
		generateTestExcercise(8, 6),
		generateTestExcercise(2, 7),
		generateTestExcercise(7, 8),
		generateTestExcercise(8, 9)
	],
});

export const Exercises = [
	Run(),
	ChestAndBack(),
	ShouldersAndArms()
]


export const ExerciseStatus = {
  Done: 'Done',
  InProgress: 'In Progress',
  ToDo: 'To Do',
};
