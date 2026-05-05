const express = require('express');
const app = express();

const taskRoutes = require('./routes/taskRoutes');
const logger = require('./middleware/logger');

app.use(express.json());
app.use(logger);

app.use('/api/tasks',taskRoutes);

console.log("logger:", typeof logger);
console.log("taskRoutes:", typeof taskRoutes);

app.listen(3000,()=>{
    console.log("server is running on port 3000")
});