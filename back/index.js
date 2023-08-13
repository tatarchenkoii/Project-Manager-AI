import db from './models/index.model.js';
import express from 'express';

const PORT = process.env.PORT || 3010;
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

db.sequelize.sync()
    .then(async() => {
        console.log("Successfully connected to database");
    })
    .catch((err) => {
        console.log("Failed to connect to db: " + err.message);
        console.log(err)
    });
