import { Quote as QuoteIcon } from 'lucide-react';
import React from 'react';
import type { Quote } from '../types';

interface QuoteListProps {
  quotes: Quote[];
}

export const QuoteList: React.FC<QuoteListProps> = ({ quotes }) => {
  if (quotes.length === 0) return null;

  return (
    <div className='mx-auto grid max-w-4xl gap-6'>
      {quotes.map((quote) => (
        <div
          key={quote.id}
          className='hover:scale-102 rounded-lg bg-white p-6 shadow-md transition-transform'
        >
          <div className='flex gap-4'>
            <QuoteIcon className='h-8 w-8 flex-shrink-0 text-indigo-500' />
            <div>
              <blockquote className='mb-4 text-xl text-gray-800'>
                "{quote.body}"
              </blockquote>
              <footer className='text-gray-600'>
                — <cite className='font-medium'>{quote.author}</cite>
              </footer>
              {quote.tags && quote.tags.length > 0 && (
                <div className='mt-4 flex flex-wrap gap-2'>
                  {quote.tags.map((tag) => (
                    <span
                      key={tag}
                      className='inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-800'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
