# Maggie Gallery

## About

This project is a media gallery for photos and videos of my daughter Maggie who passed away on September 11th, 2014. 

The idea is to synch a photos and videos folder on our various computers with folders on the server so new photos and videos can be added easily and automatically update the website. I want the server to recognize when new media files are added to the folders, update a database with information by reading the exif data, and display the new media on the website. All of this should happen automatically when new media files are added without any further input from a user. 

I want to have the ability for approved users to update and add to the image data stored in the database. 

## Technology

* Open source cloud solution (ownClound, Pydio, Syncthing, BitTorrent Sync) to sync local media files with the server
* Separate image server to resize and optimize new media
* RESTful API backend built on Node.js
* Backbone + Ractive frontend

## API Routes

All API routes return JSON.

/api/v1/media

* GET: retrieve all photo and video data
* POST: add a new media to the database

/api/v1/media/tags

* GET: retrieve a list of all available tags for photos and videos

/api/v1/media/tags/:tag

* GET: retrieve all photo and video data containing a specific tag

/api/v1/photos

* GET: retrieve all photo data

/api/v1/photos/:name

* GET: retrieve individual photo data
* PUT: update data for individual photo
* DELETE: remove data for individual photo

/api/v1/photos/tags

* GET: retrieve a list of all available tags for photos

/api/v1/photos/tags/:tag

* GET: retrieve all photo data containing a specific tag

/api/v1/videos

* GET: retrieve all video data

/api/v1/videos/:name

* GET: retrieve individual video data
* PUT: update data for individual video
* DELETE: remove data for individual video

/api/v1/videos/tags

* GET: retrieve a list of all available tags for videos

/api/v1/videos/tags/:tag

* GET: retrieve all video data containing a specific tag