import axios from 'axios';
import dotenv from 'dotenv';
import { z } from 'zod';
import type { Quote } from '../../src/types';

dotenv.config();

const FAVQS_API_URL = 'https://favqs.com/api';
const API_KEY = process.env.FAVQS_API_KEY;

if (!API_KEY) {
  throw new Error('FAVQS_API_KEY is required');
}

const api = axios.create({
  baseURL: FAVQS_API_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
});

const quoteSchema = z.object({
  id: z.number(),
  body: z.string(),
  author: z.string(),
  author_permalink: z.string(),
  tags: z.array(z.string()),
  favorites_count: z.number(),
  upvotes_count: z.number(),
  downvotes_count: z.number(),
  dialogue: z.boolean(),
  url: z.string(),
});

const favQsResponseSchema = z.object({
  page: z.number(),
  last_page: z.boolean(),
  quotes: z.array(quoteSchema),
});

export async function fetchQuotes(
  count: number,
  tag?: string,
): Promise<Quote[]> {
  try {
    const params: Record<string, string | number> = {
      page: 1,
    };

    if (tag) {
      // Use filter parameter for tag-based filtering
      params.filter = tag.trim();
      // Add type parameter to specify we want quotes by tag
      params.type = 'tag';
    }

    const quotes: Quote[] = [];
    let lastPage = false;
    let retries = 0;
    const maxRetries = 3;

    while (quotes.length < count && !lastPage && retries < maxRetries) {
      try {
        const response = await api.get<unknown>('/quotes', { params });
        const validatedData = favQsResponseSchema.parse(response.data);
        const { quotes: newQuotes, last_page } = validatedData;

        if (!newQuotes || newQuotes.length === 0) break;

        quotes.push(...newQuotes);
        lastPage = last_page;
        params.page = Number(params.page) + 1;

        // Add delay to respect rate limits
        // await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        retries++;
        if (retries === maxRetries) throw error;
        // Exponential backoff
        await new Promise((resolve) =>
          setTimeout(resolve, Math.pow(2, retries) * 1000),
        );
      }
    }

    return quotes.slice(0, count);
  } catch (error) {
    console.error('Error fetching from FavQs:', error);
    if (error instanceof z.ZodError) {
      throw new Error('Invalid response format from external API');
    }
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message ||
        'Failed to fetch quotes from external API';
      throw new Error(message);
    }
    throw new Error('Failed to fetch quotes from external API');
  }
}
