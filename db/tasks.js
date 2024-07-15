const tasks = [
    {
      id: 1,
      title: 'Set up environment',
      description: 'Install Node.js, npm, and git',
      completed: true
    },
    {
      id: 2,
      title: 'Create a new project',
      description: 'Create a new project using the Express application generator',
      completed: true
    },
    {
      id: 3,
      title: 'Install nodemon',
      description: 'Install nodemon as a development dependency',
      completed: true
    },
    {
      id: 4,
      title: 'Install Express',
      description: 'Install Express',
      completed: false
    },
    {
      id: 5,
      title: 'Install Mongoose',
      description: 'Install Mongoose',
      completed: false
    },
    {
      id: 6,
      title: 'Install Morgan',
      description: 'Install Morgan',
      completed: false
    },
    {
      id: 7,
      title: 'Install body-parser',
      description: 'Install body-parser',
      completed: false
    },
    {
      id: 8,
      title: 'Install cors',
      description: 'Install cors',
      completed: false
    },
    {
      id: 9,
      title: 'Install passport',
      description: 'Install passport',
      completed: false
    },
    {
      id: 10,
      title: 'Install passport-local',
      description: 'Install passport-local',
      completed: false
    },
    {
      id: 11,
      title: 'Install passport-local-mongoose',
      description: 'Install passport-local-mongoose',
      completed: false
    },
    {
      id: 12,
      title: 'Install express-session',
      description: 'Install express-session',
      completed: false
    },
    {
      id: 13,
      title: 'Install connect-mongo',
      description: 'Install connect-mongo',
      completed: false
    },
    {
      id: 14,
      title: 'Install dotenv',
      description: 'Install dotenv',
      completed: false
    },
    {
      id: 15,
      title: 'Install jsonwebtoken',
      description: 'Install jsonwebtoken',
      completed: false
    }
  ];


//adds datetime and priority level to each task

let i = 0;
for (let task of tasks) {
 
    task.creation_date = new Date(); 
    task.creation_date.setMinutes(task.creation_date.getMinutes() + i);


    task.priority = 'low';

    i++;

}

module.exports = tasks;