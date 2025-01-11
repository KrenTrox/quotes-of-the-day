import { Search } from 'lucide-react';
import { ButtonHTMLAttributes } from 'react';

interface SubmitButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'disabled'> {
  isLoading: boolean;
}

export const SubmitButton = ({
  isLoading,
  className = '',
  ...props
}: SubmitButtonProps) => (
  <button
    {...props}
    type='submit'
    disabled={isLoading}
    className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 flex items-center justify-center gap-2 ${className}`}
  >
    {isLoading ? (
      <>
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
        Loading...
      </>
    ) : (
      <>
        <Search className='h-5 w-5' />
        Get Quotes
      </>
    )}
  </button>
);
