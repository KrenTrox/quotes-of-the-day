import { useContext } from 'react';
import { QuoteContext } from '../../context/QuoteContext';

interface QuoteTagsProps {
  tags: string[];
}

export const QuoteTags = ({ tags }: QuoteTagsProps) => {
  const { setParams } = useContext(QuoteContext);

  if (!tags?.length) return null;

  const handleTagClick = (tag: string) => {
    setParams((prev) => ({
      ...prev,
      tag,
    }));
  };

  return (
    <div className='mt-4 flex flex-wrap gap-2'>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          className='inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-800 transition-colors hover:bg-indigo-200'
        >
          {tag}
        </button>
      ))}
    </div>
  );
};
