import { createContext, ReactNode } from 'react';
import { useQuoteForm } from '../hooks/useQuoteForm';
import type { QuoteFormData } from '../types';

interface QuoteContextType {
  params: QuoteFormData;
  setParams: (
    params: QuoteFormData | ((prev: QuoteFormData) => QuoteFormData),
  ) => void;
}

export const QuoteContext = createContext<QuoteContextType>({
  params: { count: 5, tag: '' },
  setParams: () => {},
});

interface QuoteProviderProps {
  children: ReactNode;
  initialValues: QuoteFormData;
}

export const QuoteProvider = ({
  children,
  initialValues,
}: QuoteProviderProps) => {
  const { params, setParams } = useQuoteForm(initialValues);

  return (
    <QuoteContext.Provider value={{ params, setParams }}>
      {children}
    </QuoteContext.Provider>
  );
};
