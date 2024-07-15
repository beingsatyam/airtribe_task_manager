# Task Manager API

This project is a straightforward RESTful API built with Node.js and Express.js. The API allows users to perform CRUD operations (Create, Read, Update, Delete) on tasks. Each task includes a title, description, completion status, and priority level.

## Task Schema

```json
{
  "id": 1,
  "title": "Create a new project",
  "description": "Create a new project using Magic",
  "completed": false,
  "priority": "high"
}

The creation_date is automatically set to the current timestamp.
The default value for priority is 'low'
```

# Endpoints
## Retrieve all tasks
- **URL:** `/tasks`
- **Method:** `GET`
* Optional Query Parameters:
  * completed (boolean): Filter tasks by completion status (true or false).
  * sort (string): Sort tasks by creation date (asc or desc).


## Retrieve a single task by ID

- **URL:** `/tasks/:id`
- **Method:** `GET`

## Create a New Task

- **URL:** `/tasks`
- **Method:** `POST`
- **Body Parameters:**
  - `title` (string): The title of the task (required).
  - `description` (string): The description of the task (required).
  - `completed` (boolean): The completion status of the task (required).
  - `priority` (string): The priority level of the task (`low`, `medium`, `high`).
 
## Update an Existing Task by ID

- **URL:** `/tasks/:id`
- **Method:** `PUT`
- **Body Parameters:**
  - `title` (string): The title of the task (required).
  - `description` (string): The description of the task (required).
  - `completed` (boolean): The completion status of the task (required).
  - `priority` (string): The priority level of the task (`low`, `medium`, `high`).

## Delete a Task by ID

- **URL:** `/tasks/:id`
- **Method:** `DELETE`

## Retrieve Tasks Based on Priority Level

- **URL:** `/tasks/priority/:level`
- **Method:** `GET`
- **Description:** Retrieve tasks based on priority level (`low`, `medium`, `high`).
