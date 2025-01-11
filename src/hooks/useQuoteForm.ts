import { useState } from 'react';
import type { QuoteFormData } from '../types';

export const useQuoteForm = (initialValues: QuoteFormData) => {
  const [params, setParams] = useState<QuoteFormData>(initialValues);

  return {
    params,
    setParams,
  };
};
