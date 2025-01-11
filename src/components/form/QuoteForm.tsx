import { useState } from 'react';
import type { QuoteFormData } from '../../types';
import { NumberInput } from './NumberInput';
import { SubmitButton } from './SubmitButton';
import { TagInput } from './TagInput';

interface QuoteFormProps {
  onSubmit: (data: QuoteFormData) => void;
  defaultValues?: Partial<QuoteFormData>;
  isLoading?: boolean;
}

export const QuoteForm = ({
  onSubmit,
  defaultValues = { count: 5, tag: '' },
  isLoading = false,
}: QuoteFormProps) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    count: defaultValues.count ?? 5,
    tag: defaultValues.tag ?? '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='mx-auto mb-8 max-w-2xl rounded-lg bg-white p-6 shadow-lg'
    >
      <div className='mb-6 flex flex-col gap-4 md:flex-row'>
        <NumberInput
          id='count'
          label='Number of Quotes'
          value={formData.count}
          onChange={(count) => setFormData((prev) => ({ ...prev, count }))}
        />
        <TagInput
          value={formData.tag}
          onChange={(tag) => setFormData((prev) => ({ ...prev, tag }))}
        />
      </div>
      <SubmitButton isLoading={isLoading} />
    </form>
  );
};
