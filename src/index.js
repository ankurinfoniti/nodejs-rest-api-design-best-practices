const express = require('express');

const v1WorkoutRouter = require('./v1/routes/workoutRoutes');
const v1SwaggerDocs = require('./v1/swagger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/workouts', v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);

  v1SwaggerDocs(app, PORT);
});
