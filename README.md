# Sequelize Starter Kit

A starter kit to develop Express applications with SQL database support; MySQL, MariaDB, SQLite or PostgreSQL using Sequelize ORM (Object-Relational-Mapper). MySQL is configured by default, but it can be easily modified to work with the database server of your choice.

## What's included

1. Express
2. HTML5-Boilerplate
3. PureCSS
4. Sequelize
5. mysql
6. connect-mysql-session

## Getting started

Clone the project repository

		git clone https://github.com/rijkaardorisme/sequelize-starter-kit myapp
		cd myapp

On Windows:

		.\init.bat

On Linux and OS X:

		./init.sh

You might need to make the file executable on UNIX systems before you can run it. If so do the following:

		chmod a+x init.sh

This will install the dependencies, setup the config file and initialize a fresh new git repository within which you can build your next big thing.

## Database setup

You will need to have a running instance of one of the supported database server to start the new app. Add your database user credentials to the `config.json` file. The required informations are:

* database name
* username
* password
* instance port
* session store

You are now ready to run your new app:

		node app

Go to `http://localhost:3000`, you will see the traditional Express application startpage, but with lot of awesome things under the hood.