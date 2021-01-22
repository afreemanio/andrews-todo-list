# Andrew's Todo List

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<p align="left">
  <p align="left">
    <a href="https://kingsgoteverything.ca/">View Demo</a>
    ·
    <a href="https://github.com/afreemanio/andrews-todo-list/issues">Report Bug</a>
    ·
    <a href="https://github.com/afreemanio/andrews-todo-list/issues">Request Feature</a>
    <br />
    <br />
    <br />
    Simple Todo List web application using PERN stack, with RESTful API, stateful local rendering and asynchronous CRUD via connection pooling. 
    <br />
    <br />
    <br />
  </p>

  <a href="https://github.com/afreemanio/andrews-todo-list/">
    <img src="https://imgur.com/hBHeMyI.jpg" alt="" width="875">
  </a>
    <br />
    <br />

</p>

## Content
<!-- no toc -->
  - [About The Project](#about-the-project)
    - [Built With](#built-with)
    - [Important notes](#important-notes)
    - [Features](#features)
    - [To Do](#to-do)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Contact](#contact)
  - [Acknowledgements](#acknowledgements)
  - [License](#license)

<!-- ABOUT THE PROJECT -->


## About The Project

Todo List web application using the PERN stack (Postgres, Express, React, NodeJS), complete with stateful rendering and asynchronous CRUD via connection pooling.
<p>
  <a href="https://github.com/afreemanio/kings-got-everything/">
    <img src="https://imgur.com/ppJ2bvC.jpg" alt="" width="875">
  </a>
</p>
With a special thanks to The Stoic Programmers on YouTube for providing free and quality content, whose tutorials founded the basis for this project.
<p align="left">
    <br />
</p>

### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [PostgreSQL](https://www.postgresql.org/)
- [Express](https://expressjs.com/)
- [React](https://reactjs.org/)
- [NodeJS](https://nodejs.org/en/)
- [Bootstrap](https://getbootstrap.com/)


### Important notes

- This project has very little security features beyond what is already present in the node-postgres library and what is inherent in all RESTful APIs, and as such, I would not trust this program to run open on the internet without a full understanding of the security implications.
- I personally run applications like these on a reverse proxy (Apache or NGINX) for handling REST when publicly accessible, and I would suggest those who want to run it publically despite the above warning do so as well.

### Features

- Full CRUD (Create, read, update, delete) functionality, including a modal menu for updating list elements.
- Full **RESTful** API based web service.
- Asynchronous requests allow for multiple user interaction concurrently or even on the same machine.
- React client-side rendering in conjunction with asynchronous requests provides a seamless user experience (rather than waiting for the database response before updating the client rendering).

### To Do

- [x] Finish RESTful API
- [x] React Wireframe
- [x] Todo Input Component with React
- [x] List Todos with React
- [x] Delete button
- [x] Modal Menu for Editing
- [ ] Allow for more use cases (priority)
- [ ] Provide increased security measures
- [ ] Add authentication


<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

  ```sh
  npm install npm@latest -g
  ```

- PostgreSQL
  
  Go to https://www.postgresql.org/, or download via your favourite package manager
  Make sure to setup your default user (postgres)

### Installation

1. Download the repository files (project) from the download section or clone this project to your desired directory by typing in the bash the following command:

       git clone https://github.com/afreemanio/andrews-todo-list.git

2. Install packages for both the server and client - navigate to the repository in your terminal of choice:

        cd ./server/
        npm install
        cd ..
        cd ./client/
        npm install
        cd ..


3. Next, you must create the database, table, and (optional) user in PostgreSQL that you will be using to host this application.
   The fields you enter for the database, password, and user are optional, but the table and it's properties must be the same.
   Alternatively, you can skip creating a new user entirely, and have the database and table hosted on the admin account.
   As follows:
            # Can be any admin/priviledged account
            psql -U postgres 
    
            # Once you are in:
            CREATE USER newuser WITH ENCRYPTED PASSWORD 'password';
            CREATE DATABASE mydatabase;
            #all above fields are optional
            
            # Select the database you just created
            \c mydatabase;

            # NON-OPTIONAL, must enter this
            CREATE TABLE todo(
                todo_id SERIAL PRIMARY KEY,
                description VARCHAR(255)
            );
    
            # Grant privileges to new user. If you are using your admin login, this is not necessary 
            GRANT ALL PRIVILEGES ON DATABASE mydatabase TO newuser;
            GRANT ALL PRIVILEGES ON TABLE todo TO newuser;
            GRANT ALL PRIVILEGES ON SEQUENCE todo_todo_id_seq TO newuser;



4. If  you have changed any of the names/passwords, you must update the config.json file located in the /server/ folder. Edit it to include the custom username, password, and database name you have entered. (Otherwise skip this step)


5. In order to function as intended, both the server and client applications must be running at the same time. The best way to do this with the server is to run the express server with your daemon of choice. I chose to use nodemon.

        npm install -g nodemon

6. The clientside portion of the project was created with create-react-app, and as such, will function using the default create-react-app start. However, the application is flexible in how you host it.
   In order to have a more permanent server, you can instead build the application, and host it using something like express or npm-serve. This would require building the application (as below) and installing the server to run it.

        #building the application
        npm run-script build

        #installing the server to run it
        npm install -g serve
        
        

        


## Usage

The program will run locally on your own machine, with the /client/ folder representing the clientside/react portion of the application, and the /server/ folder representing the database server.

As stated above, this can be done in a number of ways, so one may pick 2 of the below options, or even use their own.


1. Server:

        cd ./server/
   
        #no installations
        node index.js

        #with installation
        nodemon index


2. Client:

        cd ./client/

        #no installation
        npm run-script start

        #with installation, can change the port (3000) to whichever one you like, (80 for http, etc)
        serve -l 3000 -s build



3. Once the server and client are running, on your browser, navigate to localhost:3000 (or whichever port you choose)

4. Enjoy!


## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/SuperCoolFeature`)
3. Commit your Changes (`git commit -m 'Add some SuperCoolFeature'`)
4. Push to the Branch (`git push origin feature/SuperCoolFeature`)
5. Open a Pull Request

<!-- CONTACT -->

## Contact

Andrew Freeman - [@afreemanio](https://twitter.com/afreemanio) - andrewfreeman234@gmail.com

Project Link: [https://github.com/afreemanio/andrews-todo-list](https://github.com/afreemanio/andrews-todo-list)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

The Stoic Programmers on YouTube for such great content!

## License

Copyright (c) 2021 Andrew Freeman

Distributed under and usage provided for under the GNU GPL-3.0 License. See [LICENSE][license-url] for the full details.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/afreemanio/andrews-todo-list.svg?style=for-the-badge
[contributors-url]: https://github.com/afreemanio/andrews-todo-list/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/afreemanio/andrews-todo-list.svg?style=for-the-badge
[forks-url]: https://github.com/afreemanio/andrews-todo-list/network/members
[stars-shield]: https://img.shields.io/github/stars/afreemanio/andrews-todo-list.svg?style=for-the-badge
[stars-url]: https://github.com/afreemanio/andrews-todo-list/stargazers
[issues-shield]: https://img.shields.io/github/issues/afreemanio/andrews-todo-list.svg?style=for-the-badge
[issues-url]: https://github.com/afreemanio/andrews-todo-list/issues
[license-shield]: https://img.shields.io/github/license/afreemanio/andrews-todo-list.svg?style=for-the-badge
[license-url]: https://github.com/afreemanio/andrews-todo-list/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/afreemanio
[product-screenshot]: https://imgur.com/a/jo7RlDx
