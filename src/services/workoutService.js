const { v4: uuid } = require('uuid');
const Workout = require('../models/Workout');

exports.getAllWorkouts = () => {
  try {
    const allWorkouts = Workout.getAllWorkouts();

    return allWorkouts;
  } catch (error) {
    throw error;
  }
};

exports.getOneWorkout = (workoutId) => {
  try {
    const workout = Workout.getOneWorkout(workoutId);

    return workout;
  } catch (error) {
    throw error;
  }
};

exports.createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
  };

  try {
    const createdWorkout = Workout.createNewWorkout(workoutToInsert);

    return createdWorkout;
  } catch (error) {
    throw error;
  }
};

exports.updateOneWorkout = (workoutId, changes) => {
  try {
    const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);

    return updatedWorkout;
  } catch (error) {
    throw error;
  }
};

exports.deleteOneWorkout = (workoutId) => {
  try {
    Workout.deleteOneWorkout(workoutId);
  } catch (error) {
    throw error;
  }
};
