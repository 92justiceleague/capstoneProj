DIAGRAMS:

Table user_login {
  id int [pk, increment]
  email_address varchar[100] [not null]
  password_hash varchar[1000]
}

Table book_list {
  book_id int [pk, increment]
  book_name varchar[100]
  
}

Table comment_section {
  book_name varchar[100] [not null]
  book_id int [ref: - book_list.book_id]
  user_id int [ref: - user_login.id]
  comment_body varchar[1000]
}





# capstoneProj

needs:
 a POST login +email/passoword
 a POST register +email/fullname

 Checkpoint 2
For checkpoint 2, you will start designing the routes and functionality that you want to support for your final capstone project.
Break Down for what I am looking for
•	15pts Database Layout Diagram - This can be done using Excel, Pen and Paper, UML diagrams, or any other way that includes the following.
o	What tables you have
o	What kind of data the tables hold
o	How are the tables related to each other
o	The appropriate "CREATE TABLE" sql statements that can be used to create your tables
•	15pts Listing of your routes and what they mean. Please include all the routes that you plan to support and what the expected input and output of each route is. Some examples:
o	GET /recipes - This route returns an array of recipe objects that hold the id, name and description of each recipe. This route does not need any input
o	GET /recipes/:recipeId - This route returns a single recipe object that includes all the details of a recipe including the list of ingredients and instructions. This route takes in the recipe id as a path parameter.
o	POST /recipe - This route  adds a new recipe to the database. It takes in the details of the recipe as input in the request body.  The body of the recipe includes the name and the description of the recipe.
o	PUT /recipe/:recipeId - This route updates an existing recipe. It takes in the id of the recipe to update as a path parameter, and the new recipe name and description in the request body. 
o	DELETE /recipe/:recipeId - This route deletes an existing recipe. It takes in the id of the recipe to delete as a path parameter.
•	10pts Implement User Creation/Registration - Provide a mechanism to create users.
o	User authentication info (password/password hash) can be stored in your own database or using an Auth0 provider
o	You must have a route that can be used to add users, such as /createUser, /register, /signUp, etc ...
•	10pts Show that you have user authentication set up - 
o	Note that your routes do not need to all be protected and require user authentication. But there needs to be at least one example of a route protected by user authentication.  
o	This is done through your middleware
o	This can be done using either Auth0 provider or your own User password store 
o	Your must have a login route
•	10pts have your backend express code deployed to a cloud provider
•	10pts have your database deployed to a cloud provider
•	10pts Presentation - Present your application idea, database layout and design on the last day of class for discussion. You do not need to show your routes all working.
•	20pts Implementation - Have the majority of your routes implemented. Please implement at least 75% of the routes that you think you will need for your design


 

