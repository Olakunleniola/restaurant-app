# The Restaurant App
The Restaurant App is a simple full-stack web application built to demonstrate CRUD (Create, Read, Update, Delete) actions performed in the user interface. The app features a front-end built with React and a back-end powered by Express.js and Node.js.

## Features
+ Front-end: The front-end of the app displays two main sections:
    - List of all restaurants in the database: Users can view all restaurants, add new ones, and star or unstar them.
    + Starred restaurants: Users can view and interact with restaurants they have starred, including adding comments.

- Back-end: The back-end handles all API routes or endpoints for creating, deleting, editing, and retrieving restaurants. It also manages starring/unstarring restaurants and adding comments for starred restaurants.

## How to Use
1. Clone the Repository:
```bash
    git clone https://github.com/Olakunleniola/restaurant-app.git
```
2. Navigate to the Front-end Folder:
```console
    cd front-end
```
3. Install Dependencies and Start Front-end Server:
```bash
    npm install
    npm start
```
4. Navigate to the Back-end Folder:
```bash
    cd ../backend
```
5. Install Dependencies and Start Back-end Server:
```bash
    npm install
    npm start
```
6. Access the App: Once both the front-end and back-end servers are running, you can access the app by navigating to http://localhost:3000 in your web browser.

## Additional Information
+ CRUD Actions: The front-end interacts with the back-end through API calls using methods such as POST, GET, PUT, and DELETE to perform CRUD actions on restaurants.
- Starred Restaurants: Users can star/unstar restaurants, and starred restaurants have a dedicated section for users to add comments.

## License
This project is licensed under the MIT [License](). Feel free to use, modify, and distribute the code for your own purposes.