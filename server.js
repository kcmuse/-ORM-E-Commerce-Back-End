const express = require('express');
const routes = require('./routes');
// Import for sequelize
const sequelize = require(`./config/connection`)


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});

// GIVEN a functional Express.js API
// WHEN I open API GET routes in Insomnia Core for categories, products, or tags
// THEN the data for each of these routes is displayed in a formatted JSON
// WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
// THEN I am able to successfully create, update, and delete data in my database