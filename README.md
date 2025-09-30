# CEIO React App

This project is a web application built with React, Vite, Node.js, Express, PostgreSQL, and Tailwind CSS.

## Setup

1.  **Install Dependencies**:
    -   Run `npm install` in the root directory.
    -   Run `npm install` in the `client` directory.
    -   Run `npm install` in the `server` directory.

2.  **Setup Environment Variables**:
    -   In the `server` directory, create a `.env` file.
    -   Add the following variables, replacing the placeholder values with your PostgreSQL database credentials:
        ```
        DB_USER=your_db_user
        DB_HOST=localhost
        DB_DATABASE=your_db_name
        DB_PASSWORD=your_db_password
        DB_PORT=5432
        ```

## Running the Application

-   From the root directory, run `npm run dev`. This will start both the client and the server.
-   The client will be available at `http://localhost:5173`.
-   The server will be running on `http://localhost:3001`.
