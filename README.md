Sequelize Starter Kit
===================

A starter kit to develop Express applications with MySQL database support with Sequelize.

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

## MySQL setup

You will need to have a running instance of MySQL database to start the new app. Add your MySQL credentials to the `config.json` file. The required informations are:

* database name (*MySQL database*)
* username (*MySQL user*)
* password (*MySQL password*)
* instance port (*MySQL server port*)
* session store (*the database to store session keys*)
* session key (*optional*)

You are now ready to run your new app:

		node app

