const Record = require('../models/Record');

exports.getRecordForWorkout = (workoutId) => {
  try {
    const record = Record.getRecordForWorkout(workoutId);

    return record;
  } catch (error) {
    throw error;
  }
};
