import { Sequelize } from 'sequelize';
import 'dotenv/config';

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false, // Set to console.log to see SQL queries
    }
);

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('MySQL DB Connected');
        // Sync models
        await sequelize.sync(); // This will create tables if they don't exist
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export default connectDB;
export { sequelize };