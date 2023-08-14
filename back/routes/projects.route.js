import * as controller from '../controllers/Project.controller.js';

const API_URL = '/api/projects/'

export default function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(API_URL + 'getAllProjects', controller.getAllProjects);
    app.post(API_URL + 'createProject', controller.createProject);
    app.post(API_URL + 'deleteProject', controller.deleteProject);
}
