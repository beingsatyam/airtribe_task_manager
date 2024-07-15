const express = require("express");
const router = express.Router()
const TASKS = require("../db/tasks")
console.log(TASKS);


 
router.get('/', (req, res) => {

    console.log(req.query);

    const { completed, sort } = req.query;

    let avaialableTasks = TASKS.filter(task => task.deleted !== 1)

    if (completed !== undefined) {
        const isCompleted = completed === 'true';
        avaialableTasks = avaialableTasks.filter(task => task.completed === isCompleted);
      }

    if (sort === 'asc') {
        avaialableTasks.sort((a, b) => a.datetime - b.datetime);
      } 
    else if (sort === 'desc') {
        avaialableTasks.sort((a, b) => b.datetime - a.datetime);
      }

    res.send(avaialableTasks);
});

router.get('/:id', (req, res) => {

    let id = req.params.id;

    let task = TASKS.find((value) => value.id == id & value.deleted != 1);
    console.log(task)

    if (task) {
        res.send(task);
    } else {
        res.status(404).send({
            message: 'Task not found'
        });
    }
});


router.post('/' , (req ,res) => {

    let task = req.body;
    task.id = TASKS.length ? TASKS.length+1 : 1

    TASKS.push(task);

    res.status(201).json(task)

});

router.delete('/:id', (req, res) => {

    let id = req.params.id;
  

    let task = TASKS.find((value) => value.id == id);
    console.log(task);

    if (task) {
        task.deleted = 1;
   
        res.status(200).json(task)
    } else {
        res.status(404).send({
            message: 'Task not found'
        });
    }
});


router.get('/priority/:level', (req, res) => {

    const { level } = req.params.level;
    let avaialableTasks = TASKS.filter(task => task.priority === level & task.deleted !== 1)

    res.send(avaialableTasks);
});


module.exports = router;