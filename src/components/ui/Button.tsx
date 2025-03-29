import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'error';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles = 'rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles: Record<string, Record<string, string>> = {
    contained: {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
      error: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    },
    outlined: {
      primary: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
      secondary: 'border-2 border-gray-600 text-gray-600 hover:bg-gray-50 focus:ring-gray-500',
      error: 'border-2 border-red-600 text-red-600 hover:bg-red-50 focus:ring-red-500',
    },
    text: {
      primary: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
      secondary: 'text-gray-600 hover:bg-gray-50 focus:ring-gray-500',
      error: 'text-red-600 hover:bg-red-50 focus:ring-red-500',
    },
  };

  const sizeStyles: Record<string, string> = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant][color],
        sizeStyles[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}; 