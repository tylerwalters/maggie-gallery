Notes
=====

Just needed a place to organize my thoughts. Typing them out so I can make sense of them and keep from forgetting things.

Backend
-------

Things it needs:

* instance of ownCloud to sync local media files with the server
* RESTful-ish API built on Node
* a basic web server to serve up the content
* potentially, a router if the routes will be handled on the backend

Frontend
--------

Things it needs:

* a view layer with data binding
* an AJAX micro-library to connect to the API
* a service function to connect to the API and manage data using the AJAX library in a preconfigured way
* custom filters to filter the images and videos
* potentially, a router if the routes will be handled on the frontend

To Do
-----

* Backend: Authentication for POST, PUT, and DELETE requests
* Backend: Write additional unit tests
* Frontend: Build templates for Home, About, and Detail pages
* Frontend: Style individual pages
* Frontend: Write frontend application code
* DevOps: Create containers for application and ownCloud
* DevOps: Deploy app

Issues
------

