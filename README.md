# **Wiki-API**
A RESTful API for wikipedia to **extract, add, delete, update the articles** made with ***expressjs*** and ***mongoDB*** native driver (with ***mongoose*** as ORM).

### Endpoint :
localhost:3000/articles

### Parameters :
1. title
2. content

### Functionalites :
> for route localhost:3000/articles -
1. Get information for all the articles/documents.
2. Add the document by entering the values of title and content.
3. Delete all the articles.

> for route localhost:3000/articles/{specfic article} -
1. Get information by specifying the title in route.
2. Update the whole document/article by specifying the title in route and enter the new values of title and content.
3. Update part of the document/article by specifying the title in route and enter the new values of either title or content or both.
4. Delete the unwanted article by specifying the title in route.



