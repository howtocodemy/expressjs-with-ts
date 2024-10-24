import { Router } from 'express';
import { Request, Response } from 'express';

const router = Router();

// Simulate a database of users
let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
];

// Simulate a delay (like an async database call)
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// GET: Retrieve all users (using async/await)
router.get('/', async (req: Request, res: Response) => {
    try {
        await delay(5000); // Simulate database latency
        res.status(200).json(users); // Send back the users
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
});

// POST: Create a new user (using async/await)
router.post('/', async (req: Request, res: Response) => {
    try {
        const { name } = req.body;

        // if (!name) {
        //     return res.status(400).json({ message: 'Name is required' });
        // }

        // Simulate a database write operation with a delay
        await delay(500);

        // Add new user to our "database"
        const newUser = {
            id: users.length + 1, // Incremental ID
            name,
        };
        users.push(newUser);

        res.status(201).json(newUser); // Respond with the created user
    } catch (error) {
        res.status(500).json({ message: 'Failed to create user' });
    }
});

export default router;
