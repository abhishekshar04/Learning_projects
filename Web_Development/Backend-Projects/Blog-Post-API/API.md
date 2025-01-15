# Blog-Post-API

The use case of the API is to let people do blogging.

For this we have several endpoints to let users do different things.

1. /signup {POST}- This is to let people signup to the blog API.
2. /signin {POST}- This is to let people signing to access their blogs and access the information that comes with it.
3. /me {GET} - This lets them access their basic information
4. /blog {POST} - This lets them post the blogs to the backend and store them in the database.
5. /blog {GET} - This lets them access all the blogs they registered in their name/id.
6. /blog?blogid={blogid} - This lets them access the blog by its id. This is the search functionality. The id will be entered by the backend but the search keyword can be anything from the user and the backend then will decide what is the best record that is matching the search keyword and display it accordingly.
7. [Link to the flowchart of the API](./flowchart.png)

