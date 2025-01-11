import type { Quote } from '../../types';
import { QuoteCard } from './QuoteCard';

interface QuoteListProps {
  quotes: Quote[];
}

export const QuoteList = ({ quotes }: QuoteListProps) => {
  if (!quotes.length) return null;

  return (
    <div className='mx-auto grid max-w-4xl gap-6'>
      {quotes.map((quote) => (
        <QuoteCard key={quote.id} quote={quote} />
      ))}
    </div>
  );
};
