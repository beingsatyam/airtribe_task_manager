const express = require('express');
const validateTask = require('./middleware/validateInput.middleware')
const app = express();
const port = 3000;




// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/tasks', (req, res, next) => {
    if (req.method === 'POST' || req.method === 'PUT') {
      return validateTask(req, res, next);
    }
    next();
  });


 //Route registration

 const taskRoute = require("./routes/tasks.routes");

 app.use("/tasks",taskRoute)



app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



module.exports = app;