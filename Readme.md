Pre-requisties
>Installed NODE JS
>POSTMAN-> For Running the api on the localhost server
>Used Mongodb and MongoDB compass for database.
>Created this project using npm init 
>Installed all the Required packages(Mongoose,path,express)
>created app.js in which i have requires all the necessary Modules like Express, Mongoose


(APP.js)
->Instiallize the express app 
->Setup the middleware for json requests like app.use(express.json())
->Defined a port for incoming server requests
->Connected to mongodb by mongoose.connect passing the url for database connection and use then catch for handling database connection
->app.listen(PORT) is used for starting the server using callback functions

4th created three folders named Model,Controller,Routes

(Model)
->imported mongoose then defined a new scehma with required as per mentioned in which for validation title is set to required as when user does not input any string value it will throw error
->As the taskScehma got formed than it is exported using module.exports so that task is available to other part of the applications
->categoryModel is used for categorizing task where ref is given of the category  inside the taskModel Schema


(Controller)
->This code is a Node.js module that defines and exports several asynchronous functions to handle CRUD (Create, Read, Update, Delete) operations for a "task" resource in a web application. It uses the taskModel from another file to interact with a MongoDB database via Mongoose, a MongoDB object modeling tool.

->Function: createTask
Purpose: To create a new task.

->Function: retriveTask
Purpose: To retrieve tasks that are marked as completed and populate the 'category Field'

->Function: editTask
Purpose: To update an existing task.

->Function: deleteTask
Purpose: To delete an existing task.

->This line exports the four functions (createTask, retriveTask, editTask, deleteTask) so they can be used in other parts of the application, such as in route handlers.



(Routes)
->This code is a Node.js module that sets up routing for a web application using the Express framework. It defines routes for handling CRUD operations for tasks by integrating the task controller functions from taskController. Here's a detailed explanation:

->router: Creates a new router instance from Express. The router will handle the different routes for task operations.

Purpose: To create a new task. (POST METHOD IS USED) It calls the createTask function from the task controller when a POST request is made to (/task).

Purpose: To retrieve tasks. (GET METHOD IS USED)It calls the retriveTask function from the task controller when a GET request is made to /task.

Purpose: To update an existing task. (PUT METHOD IS USED) It calls the editTask function from the task controller when a PUT request is made to /task/:id, where :id is a placeholder for the task ID.

Purpose: To delete an existing task. (DELETE METHOD IS USED)It calls the deleteTask function from the task controller when a DELETE request is made to /task/:id, where :id is a placeholder for the task ID.



later on in app.js

Requiring and Using Routes

taskRoutes: Imports task-related routes from the taskRoutes module.
categoryRoutes: Imports category-related routes from the categoryRoutes module.

app.use("/api", taskRoutes);
app.use('/api2', categoryRoutes);


app.use will configure the taskroutes and category routes for any routes that starts with /api or /api2

Used postman for performing the CRUD operations 


For Any Query Related to code contact

Email:Jangdekaran4@gmail.com
Phone:8866078197