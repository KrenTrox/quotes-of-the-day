interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <div className='mx-auto mb-8 max-w-2xl rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700'>
    {message}
  </div>
);
