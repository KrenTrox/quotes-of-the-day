import { useQuery } from '@tanstack/react-query';
import { quotesApi } from '../lib/api';
import type { QuoteParams } from '../types';

export const useQuotes = (params: QuoteParams) => {
  return useQuery({
    queryKey: ['quotes', params],
    queryFn: () => quotesApi.getQuotes(params),
    enabled: params.count > 0,
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
  });
};
