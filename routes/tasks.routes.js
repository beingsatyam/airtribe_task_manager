const express = require("express");
const router = express.Router()
const TASKS = require("../db/tasks")
console.log(TASKS);




router.get('/priority/:level', (req, res) => {
    console.log(req.params)
    const {
        level
    } = req.params;
    console.log(level, level)
    let availableTasks = TASKS.filter(task => task.priority === level & task.deleted !== 1)


    if (availableTasks.length > 0) {
        return res.json(availableTasks)
    } else {
        res.status(404).send({
            message: 'No tasks found!'
        });
    }
});

router.get('/', (req, res) => {

    console.log(req.query);

    const {
        completed,
        sort
    } = req.query;

    let availableTasks = TASKS.filter(task => task.deleted !== 1)

    if (completed) {
        const isCompleted = completed === 'true' ? true : false
        availableTasks = availableTasks.filter(task => task.completed === isCompleted);
    };

    if (sort === 'asc') {
        availableTasks.sort((a, b) => a.creation_date - b.creation_date);
    } else if (sort === 'desc') {
        availableTasks.sort((a, b) => b.creation_date - a.creation_date);
    };

    if (availableTasks.length > 0) {
        return res.json(availableTasks);
    } else {
        res.status(404).send({
            message: 'No tasks found!'
        });
    }

});

router.get('/:id', (req, res) => {

    let id = req.params.id;

    let task = TASKS.find((value) => value.id == id & value.deleted != 1);
    console.log(task);

    if (task) {
        res.send(task);
    } else {
        res.status(404).send({
            message: 'Task not found'
        });
    }
});


router.post('/', (req, res) => {

    req.body.id = TASKS.length ? TASKS.length + 1 : 1;
    let task = req.body;

    task.creation_date = new Date()
    task.creation_date.setMinutes(task.creation_date.getMinutes() + 15);

    TASKS.push(task);

    res.status(201).json(task);

});

router.put('/:id', (req, res) => {

    let {  id } = req.params;
    let payload = req.body;

    let task = TASKS.find((value) => value.id == id);
    console.log(id);

    if (task) {
        task.title = payload.title;
        task.description = payload.description;
        task.completed = payload.completed;
        task.creation_date = new Date();
        task.creation_date.setMinutes(task.creation_date.getMinutes() + 15);

        res.status(200).json(task);
    } else {
        res.status(404).send({
            message: 'Task not found!'
        });
    }
});

router.delete('/:id', (req, res) => {

    let id = req.params.id;

    let task = TASKS.find((value) => value.id == id);
    console.log(task);

    if (task) {
        task.deleted = 1;

        res.status(200).json({
            message: 'Task deleted!'
        });
    } else {
        res.status(404).send({
            message: 'Task not found!'
        });
    };
});





module.exports = router;