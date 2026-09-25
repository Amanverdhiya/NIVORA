import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import listingsRoutes from './routes/listings.routes.js';
import reviewsRoutes from './routes/reviews.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/listings', listingsRoutes);
app.use('/api/reviews', reviewsRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Root API info
app.get('/', (req, res) => {
  res.json({
    name: 'Nivora Backend API',
    version: '1.0.0',
    endpoints: [
      'GET  /api/listings',
      'GET  /api/listings/:id',
      'POST /api/reviews',
      'GET  /api/health',
    ],
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Nivora backend server running on http://localhost:${PORT}`);
});
