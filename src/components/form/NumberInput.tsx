import { InputHTMLAttributes } from 'react';

interface NumberInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'value' | 'onChange'
  > {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export const NumberInput = ({
  id,
  label,
  value,
  onChange,
  min = 1,
  max = 50,
  className = '',
  ...props
}: NumberInputProps) => (
  <div className='flex-1'>
    <label
      htmlFor={id}
      className='mb-1 block text-sm font-medium text-gray-700'
    >
      {label}
    </label>
    <input
      {...props}
      type='number'
      id={id}
      min={min}
      max={max}
      value={value}
      onChange={(e) =>
        onChange(Math.max(min, Math.min(max, parseInt(e.target.value) || min)))
      }
      className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${className}`}
    />
  </div>
);
