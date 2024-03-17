import express from 'express';
import mongoose from 'mongoose';
import authRoute from './routes/auth.route.js';
import userRoute from './routes/user.route.js';
import cors from 'cors' 
const app = express();
const uri = 'mongodb://localhost:27017/data';
const port = 6000;
import dotenv from 'dotenv'
dotenv.config()
// Connect to MongoDB
mongoose.connect(process.env.MONGO)
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors())

// Route for handling requests related to users
app.use('/api/user', userRoute);
app.use('/api/auth',authRoute);
app.get('*', (req ,res)=>{
  res.sendFile(path(join(__dirname ,'my-project' ,'dist' ,'index.html')))
})
// Error handler for invalid routes
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// Global error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message
    }
  });
});




// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
