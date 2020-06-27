/**
Exercise Types
	timed: just time, like holding a plank
	reps: just reps, like pushups
	weight: reps and weight,
	run: time and distance
*/
export type Exercise = {|
	id: string
	date: Date, //date done
	name: string,
	type: string,
	time: Date,
	reps: number,
	weight: number,
	distance: number,
|};

export type Workout = {|
  date: Date, //date done
  icon: string,
  color: string,
  name: string,
  excercies: Array<Exercise>
|};

export type Moment = Object;

export type FaIcon = Object;

