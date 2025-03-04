import { Sequelize } from "sequelize";

const sequelize = new Sequelize("chatdb", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

export default sequelize;
