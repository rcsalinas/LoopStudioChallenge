# CountryVote Project

## Overview

This project consists of a backend and frontend application for voting on countries. The backend is hosted on Render.com using MongoDB Atlas, and the frontend is a React application using Material UI and Jest.

## Getting Started

### Backend

1. Navigate to the `Backend` directory:
    ```bash
    cd Backend
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

3. Start the backend server:
    ```bash
    npm start
    ```

### Frontend

1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

3. Start the frontend application:
    ```bash
    npm start
    ```

### Testing

To run tests for both the backend and frontend:

1. Navigate to the respective directory.
2. Run the following command:
    ```bash
    npm test
    ```

## Hosting and Environment

- **Backend Hosting:** The backend is hosted on Render.com and uses MongoDB Atlas. The backend requires a `.env` file to start. If you want to try the backend locally, please reach out to me, and I'll provide the `.env` file containing the MongoDB URI and password.
  
- **Frontend Hosting:** The frontend does not require any special configuration to run locally.

**Note:** Render's free servers can be slow and serverless. You may need to make a couple of requests to get the server up to speed.

## Considerations

- The `topCountries` database is dynamically generated with each vote submitted. The table starts empty and is populated as users submit votes.

- Due to time constraints, the frontend does not have complete test coverage, but the backend is fully covered.

- The project uses Material UI for UI components and Jest for testing.

## Contact

Feel free to reach out if you need the `.env` file for local backend testing or if you have any other questions. The .env file must be added to the root of the Backend directory. It took me about 12 hours in several coding sessions to finish it.
