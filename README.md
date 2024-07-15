# Task Manager API

This project is a simple RESTful API for managing tasks using Node.js, Express.js, and other NPM packages. The API allows users to perform CRUD operations (Create, Read, Update, Delete) on tasks. Each task includes a title, description, completion status, and priority level.

## Task Schema

```json
{
  "id": 1,
  "title": "Create a new project",
  "description": "Create a new project using Magic",
  "completed": false,
  "priority": "high"
}

creation_date is calculated automatically.
default value for priority is 'low'.
```

# Endpoints
## Retrieve all tasks
* __ URL: /tasks __
* Method: GET
* Optional Query Parameters:
  * completed (boolean): Filter tasks by completion status.
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
 
  - 
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
