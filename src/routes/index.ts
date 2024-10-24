import { Router, Request, Response } from 'express';

const router = Router();

// Define a simple GET route
router.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Express TypeScript API!');
});

export default router;
