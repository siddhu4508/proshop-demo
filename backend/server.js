import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js';
import cors from 'cors';

const port = process.env.PORT || 5000;

connectDB(); // Connect to MongoDB

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request body
app.use(express.urlencoded({ extended: true})); // Parse URL-encoded request body

// Cookie parser middleware
app.use(cookieParser());

app.use(cors());

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.use(notFound);

app.use(errorHandler); // Error handling middleware



app.listen(port, () => console.log(`Server running on port ${port}`));