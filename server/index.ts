import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import rateLimit from 'express-rate-limit';
import { z } from 'zod';
import { getCache } from './services/cache';
import { fetchQuotes } from './services/quotes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Rate limiting with proper IP handling
const limiter = rateLimit({
  windowMs: 20 * 1000, // 20 seconds
  max: 30, // limit each IP to 30 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      error: 'Too many requests, please try again later.',
    });
  },
  keyGenerator: (req) => {
    return req.ip || req.socket.remoteAddress || '127.0.0.1';
  },
});

app.set('trust proxy', 1);
app.use(cors());
app.use(limiter);
app.use(express.json());

// Updated query schema with proper validation
const querySchema = z
  .object({
    count: z.coerce.number().min(1).max(50).default(5),
    tag: z.string().optional(),
  })
  .strict();

app.get('/api/quotes', async (req, res) => {
  try {
    const params = querySchema.safeParse(req.query);

    if (!params.success) {
      return res.status(400).json({
        error: 'Invalid request parameters',
        details: params.error.issues,
      });
    }

    const { count, tag } = params.data;
    const cache = await getCache();

    const cacheKey = `quotes-${count}-${tag || 'notag'}`;
    const cachedQuotes: string[] | undefined = await cache.get<string[]>(
      cacheKey,
    );

    if (cachedQuotes) {
      return res.json(cachedQuotes);
    }

    const quotes = await fetchQuotes(count, tag);
    await cache.set(cacheKey, quotes);

    res.json(quotes);
  } catch (error) {
    console.error('Error fetching quotes:', error);
    res.status(500).json({ error: 'Failed to fetch quotes' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
