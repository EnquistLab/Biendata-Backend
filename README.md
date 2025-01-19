# Biendata-Backend

Biendata-Backend serves as the server-side component of the Biendata project, facilitating data processing, API endpoints, and database interactions to support the visualization of plant species distributions.

## Features

- **API Endpoints**: Offers RESTful APIs to retrieve species data, range maps, and observation details.
- **Data Processing**: Manages data transformations for efficient querying and visualization.
- **Database Integration**: Interfaces with the database to store and retrieve species information.
- **Download Support**: Provides downloadable files, including observations, traits, and range shapefiles.

## Prerequisites

Ensure the following are installed:

- **Node.js**: Version 14 or higher
- **npm**: Version 6 or higher
- **Database**: A compatible database system (e.g., MongoDB, PostgreSQL)

## Getting Started

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/EnquistLab/Biendata-Backend.git
    cd Biendata-Backend
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Configure Environment Variables**:
    Create a `.env` file in the root directory with the following content:
    ```env
    DATABASE_URL=your_database_url
    PORT=3001
    ```

4. **Start the Application**:
    ```bash
    npm run dev
    ```

## Technologies Used

- **Backend Framework**: Node.js with Express.js
- **Database**: PostgreSQL
- **Environment Management**: dotenv


