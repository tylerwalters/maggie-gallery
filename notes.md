Notes
=====

Just needed a place to organize my thoughts. Typing them out so I can make sense of them and keep from forgetting things.

Backend
-------

Things it needs:

* instance of ownCloud to synch local media files with the server
* RESTful-ish API built on Node
* potentially, an image server for resizing, optimizing, and serving images
* a basic webserver to serve up the content
* potentially, a router if the routes will be handled on the backend

Frontend
--------

Things it needs:

* a view layer with data binding
* an ajax micro-library to connect to the API
* a service function to connect to the API and manage data using the ajax library in a preconfigured way
* custom filters to filter the images and videos
* potentially, a router if the routes will be handled on the frontend