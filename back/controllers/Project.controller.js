import db from '../models/index.model.js';

/**
 * DB-Models declarations
 */
const {
    project: Projects
} = db;

/**
 * Function to get all projects
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const getAllProjects = async (req, res) => {
    try {
        const data = await Projects.findAll();
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving projects."
        })
    }
}

/**
 * Function to create new project
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const createProject = async (req, res) => {
    try {
        const { newProject } = req.body;

        const findProject = await Projects.findOne({
            where: {
                name: newProject.name
            }
        })

        if (findProject) {
            res.status(400).send({
                message: "Project with such name already exists"
            })
        }

        await Projects.create({
            name: newProject.name,
            description: newProject.description
        })

        res.status(201).send("Project created successfully!");
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating new project."
        })
    }
}

/**
 * Function to delete existing project
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const deleteProject = async (req, res) => {
    const { id } = req.body;

    try {
        const numDeleted = await Projects.destroy({ where: { id } });

        if (numDeleted === 1) {
            res.send({ message: "Project was deleted successfully." });
        } else {
            res.status(404).send({ message: `Project with id=${id} was not found.` });
        }
    } catch (err) {
        res.status(500).send({ message: `Could not delete Project with id=${id}.` });
    }
};
