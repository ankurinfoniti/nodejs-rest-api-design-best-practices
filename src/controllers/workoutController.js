const workoutService = require('../services/workoutService');

exports.getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({ status: 'OK', data: allWorkouts });
};

exports.getOneWorkout = (req, res) => {
  const workoutId = req.params.workoutId;

  if (!workoutId) {
    return;
  }

  const workout = workoutService.getOneWorkout(workoutId);
  res.send({ status: 'OK', data: workout });
};

exports.createNewWorkout = (req, res) => {
  const { body } = req;

  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };

  const createdWorkout = workoutService.createNewWorkout(newWorkout);
  res.status(201).send({ status: 'OK', data: createdWorkout });
};

exports.updateOneWorkout = (req, res) => {
  const { body } = req;
  const workoutId = req.params.workoutId;

  if (!workoutId) {
    return;
  }

  const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);
  res.send({ status: 'OK', data: updatedWorkout });
};

exports.deleteOneWorkout = (req, res) => {
  const workoutId = req.params.workoutId;

  if (!workoutId) {
    return;
  }

  workoutService.deleteOneWorkout(workoutId);
  res.status(204).send({ status: 'OK' });
};
