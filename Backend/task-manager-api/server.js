require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const taskRoutes = require('./routes/taskRoutes');
const logger = require('./middleware/logger');

app.use(express.json());
app.use(logger);

app.use('/api/tasks',taskRoutes);

console.log("logger:", typeof logger);
console.log("taskRoutes:", typeof taskRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
});