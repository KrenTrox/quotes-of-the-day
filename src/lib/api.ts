import axios from 'axios';
import { Quote, QuoteParams } from '../types';

const api = axios.create({
  baseURL: '/api',
});

export const quotesApi = {
  getQuotes: async ({ count, tag }: QuoteParams): Promise<Quote[]> => {
    const params = new URLSearchParams();
    params.append('count', count.toString());
    if (tag) params.append('tag', tag);

    const { data } = await api.get<Quote[]>(`/quotes?${params.toString()}`);
    return data;
  },
};
