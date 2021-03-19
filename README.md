# launch-project

## structural organization

#### controllers

**authController** - handles requests from authRoutes and creates the appropriate view
with user data

**postController** - handles requests from postRoute and renders the appropriate
view in activities

#### middleWare

**authMiddleware** - checks for credentials and verifies them

#### models

**post** - data model for Post

**user** - data model for User

#### routes

**authRoutes** - forwards requests for log in/log out and sign up to corresponding
controller

**postRoute** - forwards requests for displaying and creating posts to corresponding
controller


#### views
**activities**
- activities - template that renders all the posts
- post - template for the form to create a post
- show - template that renders the details of a post

**partials**
- footer - template for the website footer
- header - template for the website header

**pages**
- 404 - template for the error page
- home - template for the landing/home page
- login - template for the login page
- profile - template for the user profile page
- signup - template for the sign up page


## to run code:
1. cd into root directory
2. run "nodemon"

## no known bugs

## code contribution
**Aubrey:** log in, sign up, and posts

**Jennifer:** sign up and profile


