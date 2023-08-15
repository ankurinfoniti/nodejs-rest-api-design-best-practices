exports.getAllWorkouts = (req, res) => {
  res.send('Get all workouts');
};

exports.getOneWorkout = (req, res) => {
  res.send('Get an existing workout');
};

exports.createNewWorkout = (req, res) => {
  res.send('Create a new workout');
};

exports.updateOneWorkout = (req, res) => {
  res.send('Update an existing workout');
};

exports.deleteOneWorkout = (req, res) => {
  res.send('Delete an existing workout');
};
