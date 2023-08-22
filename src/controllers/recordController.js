const recordService = require('../services/recordService');

exports.getRecordForWorkout = (req, res) => {
  const workoutId = req.params.workoutId;

  if (!workoutId) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: "Parameter ':workoutId' can not be empty" },
    });
    return;
  }

  try {
    const records = recordService.getRecordForWorkout(workoutId);
    res.send({ status: 'OK', data: records });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};
