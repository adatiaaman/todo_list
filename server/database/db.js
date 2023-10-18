import mongoose from 'mongoose';
import dotenev from 'dotenv';

dotenev.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.vhandix.mongodb.net/?retryWrites=true&w=majority`;
    mongoose.connect(MONGODB_URI, {useNewUrlParser: true});
    mongoose.connection.on('connected', () => {
        console.log('MongoDB Atlas connected successfully.');
    });
    mongoose.connection.on('disconnected', () => {
        console.log('MongoDB Atlas disconnected.');
    });
    mongoose.connection.on('error', (error) => {
        console.log('MongoDB Atlas connection error: ', error);
    });
}

export default Connection;