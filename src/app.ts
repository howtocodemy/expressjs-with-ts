import express from 'express';
import bodyParser from 'body-parser';
import { RegisterRoutes } from './routes/routes';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger/swagger.json'; // Import generated Swagger spec
import { ALLOWED_ORIGIN_ADDRESSES } from './cors_addresses';

// Create an instance of Express
const app = express();
// app.use(urlencoded({ extended: true, }));
// Middleware to parse JSON requests
app.use(bodyParser.json());
// app.use(bodyParser.json({ limit: '10mb' }));
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cors({
    origin: ALLOWED_ORIGIN_ADDRESSES,
    credentials: true,
}));


RegisterRoutes(app);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Start the server and listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
