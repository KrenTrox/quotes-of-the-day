import { InputHTMLAttributes } from 'react';
import { Tag } from 'lucide-react';

interface TagInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'onChange'> {
  value: string;
  onChange: (value: string) => void;
}

export const TagInput = ({
  value,
  onChange,
  className = '',
  ...props
}: TagInputProps) => (
  <div className="flex-1">
    <label htmlFor="tag" className="block text-sm font-medium text-gray-700 mb-1">
      Tag (Optional)
    </label>
    <div className="relative">
      <input
        {...props}
        type="text"
        id="tag"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 pl-10 ${className}`}
        placeholder="e.g., love, wisdom"
      />
      <Tag className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  </div>
);