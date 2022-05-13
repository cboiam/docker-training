# docker-training

This exercise is to practice docker skills, so you need to create a dockerfile for the web application, an instance of any backend with its database. Then you wrap you application and services together with a docker-compose file.

### Applications

All backend applications should be exposed on port 9000. Maybe the connection strings for the databases would have to be adjusted according to containers.

#### Angular
 - node version: 14.17.6

#### .Net
 - version: 6.0.102
 - database: mongo

#### Express
 - node version: 14.17.6
 - database: Microsoft SQL Server

#### PHP
 - version: 7.2
 - database: MySQL
 - hint: run `docker-php-ext-install mysqli` to install mysql on your dockerfile

#### Python
 - version: 3.10.1
 - database: Postgres