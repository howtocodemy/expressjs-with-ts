import express, { Request, Response, NextFunction } from 'express';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import asyncUsersRouter from './routes/async_users';

// Create an instance of Express
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// // Use your routes
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/async-users', asyncUsersRouter);


// // Error handling middleware
// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

// Define a simple GET route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

// Start the server and listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
