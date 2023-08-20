const DB = require('../database/db.json');
const { saveToDatabase } = require('../database/utils');

exports.getAllWorkouts = () => {
  return DB.workouts;
};

exports.getOneWorkout = (workoutId) => {
  const workout = DB.workouts.find((workout) => workout.id === workoutId);

  if (!workout) {
    return;
  }

  return workout;
};

exports.createNewWorkout = (newWorkout) => {
  const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;

  if (isAlreadyAdded) {
    return;
  }

  DB.workouts.push(newWorkout);
  saveToDatabase(DB);

  return newWorkout;
};

exports.updateOneWorkout = (workoutId, changes) => {
  const indexForUpdate = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );

  if (indexForUpdate === -1) {
    return;
  }

  const updatedWorkout = {
    ...DB.workouts[indexForUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
  };

  DB.workouts[indexForUpdate] = updatedWorkout;
  saveToDatabase(DB);

  return updatedWorkout;
};

exports.deleteOneWorkout = (workoutId) => {
  const indexForDeletion = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );

  if (indexForDeletion === -1) {
    return;
  }

  DB.workouts.splice(indexForDeletion, 1);
  saveToDatabase(DB);
};
