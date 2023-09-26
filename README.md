# Node and React CRUD Application with MySQL

This repository contains a CRUD (Create, Read, Update, Delete) application built using Node.js, React, and MySQL. The application allows users to perform basic CRUD operations on a dataset stored in a MySQL database.

## Prerequisites

Ensure you have the following prerequisites installed before running the application:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- npm (Node Package Manager): This comes with Node.js, so no separate installation is needed.
- MySQL: [Download and Install MySQL](https://www.mysql.com/)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <repository_directory>
   ```

3. Install the required dependencies for the Node.js server:

   ```bash
   npm install
   ```

4. Navigate to the `client` directory to install React dependencies:

   ```bash
   cd client
   npm install
   ```

## MySQL Database Setup

1. Create a MySQL database and configure the connection details (host, port, username, password) in `server/config/db.config.js`.

2. Create a table named `items` in the MySQL database with the following structure:

   ```sql
   CREATE TABLE employees (
   idemployees INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(255) NOT NULL,
   age INT NOT NULL,
   country VARCHAR(255) NOT NULL,
   position VARCHAR(255) NOT NULL,
   wage INT NOT NULL
   );
   ```

## Running the Application

1. Start the Node.js server:

   ```bash
   npm start
   ```

   The server will start at [http://localhost:5000](http://localhost:5000).

2. In a separate terminal, start the React application:

   ```bash
   cd client
   npm start
   ```

   The React application will start at [http://localhost:3000](http://localhost:3000).

## Usage

- Access the application in your web browser at [http://localhost:3000](http://localhost:3000).
- Use the application to perform CRUD operations on the dataset stored in the MySQL database.

## Technologies Used

- Node.js
- Express.js
- React
- MySQL

## License

This project is licensed under the [MIT License](LICENSE).
