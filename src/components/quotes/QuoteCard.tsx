import { Quote as QuoteIcon } from 'lucide-react';
import type { Quote } from '../../types';
import { QuoteTags } from './QuoteTags';

interface QuoteCardProps {
  quote: Quote;
}

export const QuoteCard = ({ quote }: QuoteCardProps) => (
  <div className='hover:scale-102 rounded-lg bg-white p-6 shadow-md transition-transform'>
    <div className='flex gap-4'>
      <QuoteIcon className='h-8 w-8 flex-shrink-0 text-indigo-500' />
      <div>
        <blockquote className='mb-4 text-xl text-gray-800'>
          "{quote.body}"
        </blockquote>
        <footer className='text-gray-600'>
          — <cite className='font-medium'>{quote.author}</cite>
        </footer>
        <QuoteTags tags={quote.tags} />
      </div>
    </div>
  </div>
);
