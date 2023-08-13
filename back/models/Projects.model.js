export default (sequelize, Sequelize) => {
    return sequelize.define("Projects", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        description: {
            type: Sequelize.STRING
        }
    });
};
