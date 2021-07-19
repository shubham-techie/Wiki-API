# **Wiki-API**
A RESTful API for wikipedia made with ***expressjs*** and ***mongoDB*** native driver (with ***mongoose*** as ORM) to **extract, add, delete, update the articles**.

![image](https://user-images.githubusercontent.com/85562020/126122452-7b6b36c7-da6e-40f9-8eb0-76b7bc8e507c.png)


### Endpoint :
<https://localhost:3000/articles>

### Parameters :
1. title
2. content

### Functionalites :
> for route <https://localhost:3000/articles> -
1. Get information for all the articles/documents.
2. Add the document by entering the values of title and content.
3. Delete all the articles.

> for route <https://localhost:3000/articles/{specific article}> -
1. Get information by specifying the title in route.
2. Update the whole document/article by specifying the title in route and enter the new values of title and content.
3. Update part of the document/article by specifying the title in route and enter the new values of either title or content or both.
4. Delete the unwanted article by specifying the title in route.


### ## Tested with [Postman](https://www.postman.com/)
