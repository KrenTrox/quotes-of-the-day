import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useContext } from 'react';
import { ErrorMessage } from './components/Error';
import { ErrorBoundary } from './components/ErrorBoundary';
import { QuoteForm } from './components/form/QuoteForm';
import { Header } from './components/layout/Header';
import { QuoteList } from './components/quotes/QuoteList';
import { QuoteContext, QuoteProvider } from './context/QuoteContext';
import { useQuotes } from './hooks/useQuotes';
import type { QuoteFormData } from './types';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const initialFormData: QuoteFormData = { count: 5, tag: '' };

function QuotesApp() {
  return (
    <QuoteProvider initialValues={initialFormData}>
      <QuoteContent />
    </QuoteProvider>
  );
}

function QuoteContent() {
  const { params, setParams } = useContext(QuoteContext);
  const { data: quotes, isLoading, error } = useQuotes(params);

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100'>
      <div className='container mx-auto px-4 py-8'>
        <Header
          title='Quotes of the Day'
          subtitle='Discover inspiring quotes from great minds'
        />

        <ErrorBoundary>
          <QuoteForm
            onSubmit={setParams}
            defaultValues={params}
            isLoading={isLoading}
          />

          {error && (
            <ErrorMessage
              message={
                error instanceof Error ? error.message : 'An error occurred'
              }
            />
          )}

          <QuoteList quotes={quotes ?? []} />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <QuotesApp />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
