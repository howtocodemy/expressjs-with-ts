import express, { urlencoded, json } from 'express';
import { RegisterRoutes } from './routes/routes';

import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger/swagger.json'; // Import generated Swagger spec

// Create an instance of Express
const app = express();
app.use(urlencoded({ extended: true, }));
// Middleware to parse JSON requests
app.use(json());
RegisterRoutes(app);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Start the server and listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
