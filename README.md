# Book Club Cafe
![Book Club Cafe](https://i.imgur.com/4ZXSCw2.png)

## Description

Whiskker is a React/Rails social network application that helps cat users build a community with other cats, share their lives with Meow Posts, and communicate with one another using Meow Mail.

## Technologies/Skills

- React.js
- Ruby on Rails
- Test Driven Development with React Testing Library and Jest
- Heroku CLI
- Postgresql
- Object-Oriented Design
- Domain Modeling
- Debugging: Postman, byebug, Application Tab in the Dev Tools
- RESTful API endpoints
- Material UI
- Github

## Goals
Our goal was to build a React/Ruby on Rails application within 3 weeks following this project schedule:
* Week 1: Plan an idea, deliver an intial pitch, present a project proposal to a project manager (our instructor), 
* Week 2: MVP presentation with project manager
* Week 3: Complete project and prepare for final project presentation 
* Also completed daily and weekly check-ins with fellow cohort-mates and instructor

## Accomplishments
* For my Rails backend:
    * Auth
    * Multiple has_many_through relationships
    * Seeds from a complex data set
    * Custom routes
    * Custom controller/model methods
    * Validation
* For my React frontend:
    * Auth
    * Tests
    * Interacting with a complex API
    * Custom CSS with Material UI
    * Responsive web design
* Organized my code into purposeful components in order to keep it drywork
* Deployed application using Heroku

## Challenges
* Learning and implementing TDD
* Implementing responsive design
* Accessing book data from API

## Future Improvements
* Different type of users: teachers, students, etc.
* Discussion threads during live events
* Monthly calendar to display upcoming events
* Integrating Active Storage for uploads

## Avaliable Scripts
* Environment Setup
    * Start PostgreSQL server for WSL: sudo service postgresql start
    * Start PostgreSQL server for OSX: brew services start postgresql

* Fork and clone our [repository](https://github.com/conniedc1206/book-club-cafe-app) onto your local environment:
    * Install the dependencies by running: bundle install & npm install --prefix client
    * In the project directory, you can run the app in the development mode: 
         * create db: rails db:create
         * run migrations and seed data: rails db:migrate db:seed
         * run servers: npm start –prefix client & rails s (in a separate terminal)
         * This will run your server on port http://localhost:4000. Check it out in the browser to make sure your server works!

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Creator
---
Connie Park [Github](https://github.com/conniedc1206)  [Linkedin](https://www.linkedin.com/in/conniepark2)  
