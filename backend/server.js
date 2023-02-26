import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import products from './data/Products.js';
import connectDB from './config/db.js';
import Colors from 'colors';
import morgan from 'morgan';
import productRoutes from './routs/productRouts.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRoutes  from './routs/userRoutes.js'
import orderRoutes  from './routs/orderRoutes.js'
import uploadRoutes from './routs/uploadRoutes.js'
import { mongo } from 'mongoose';


dotenv.config();

connectDB();

const app = express();

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use(express.json()) // allow us to access json data in body

app.get('/', (req,res) => {
    res.send('API is running...');
});


app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal' ,(req, res ) => 
res.send(process.env.PAYPAL_CLINT_ID)
)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

   
// handeling 404 errors
app.use(notFound);

// coustom error handling 
app.use(errorHandler);

 
const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`server running in ${process.env.NODE_ENV} port ${PORT}`.yellow.bold));
