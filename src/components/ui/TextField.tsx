import React from 'react';
import clsx from 'clsx';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  error = false,
  helperText,
  fullWidth = false,
  className,
  ...props
}) => {
  return (
    <div className={clsx('flex flex-col', fullWidth && 'w-full')}>
      {label && (
        <label className="mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        className={clsx(
          'px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
          error
            ? 'border-red-300 focus:ring-red-500'
            : 'border-gray-300 focus:ring-blue-500',
          fullWidth && 'w-full',
          className
        )}
        {...props}
      />
      {helperText && (
        <p
          className={clsx(
            'mt-1 text-sm',
            error ? 'text-red-600' : 'text-gray-500'
          )}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}; 