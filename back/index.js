import db from './models/index.model.js';
import express from 'express';
import projectsRoute from "./routes/projects.route.js";

const PORT = process.env.PORT || 3010;
const app = express();
app.use(express.json());

/**
 * Routes registration
 */
projectsRoute(app);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.json({
        message: "Server is working"
    });
});

db.sequelize.sync()
    .then(async() => {
        console.log("Successfully connected to database");
    })
    .catch((err) => {
        console.log("Failed to connect to db: " + err.message);
        console.log(err)
    });
