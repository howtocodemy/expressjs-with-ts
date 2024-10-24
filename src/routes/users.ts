import { Router, Request, Response } from 'express';

const router = Router();

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Define a GET route for retrieving all users
router.get('/', (req: Request, res: Response) => {
    res.send('Here is a list of users');
});

// Define a POST route for creating a new user
router.post('/', async (req: Request, res: Response) => {
    const user = req.body;
    await delay(500);
    res.status(201).send(`User ${user.name} created!`);
});

export default router;
