const db = require("../data/db-config");

module.exports = {
  find,
  add,
  findTasks,
  addTask,
  findResources,
  addResource,
findById

};

function find() {
  return db("projects");
}

function findById(id) {
    return db("projects", "tasks")
    .join("tasks", "tasks.project_id", "=", "projects.id")
    .select("projects.id", "projects.name", "projects.description", "projects.boolean", "tasks.description", 'tasks.id')
   
    .where("projects.id", "=", id)
    .limit(1)
     //.where({project_id:  id})
   
  }

function add(project) {
  return db("projects").insert(project);
}

// function findTasks() {
//   return db("tasks");
// }

function findTasks() {
    return db('tasks')
        .join('projects', 'projects.id', '=', 'tasks.project_id')
        .select('projects.name as projectName', 'projects.description as projectDesc', 'tasks.notes', 'tasks.description', 'tasks.id');
};

function addTask(task) {
    return db("tasks").insert(task);
}

function findResources() {
    return db("resources");
}

function addResource(resource) {
    return db("resources").insert(resource);
}


