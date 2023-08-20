const { v4: uuid } = require('uuid');
const Workout = require('../models/Workout');

exports.getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();

  return allWorkouts;
};

exports.getOneWorkout = (workoutId) => {
  const workout = Workout.getOneWorkout(workoutId);

  return workout;
};

exports.createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
  };

  const createdWorkout = Workout.createNewWorkout(workoutToInsert);

  return createdWorkout;
};

exports.updateOneWorkout = (workoutId, changes) => {
  const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);

  return updatedWorkout;
};

exports.deleteOneWorkout = (workoutId) => {
  Workout.deleteOneWorkout(workoutId);
};
