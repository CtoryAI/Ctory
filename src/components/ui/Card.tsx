import React from 'react';
import clsx from 'clsx';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'elevated' | 'outlined';
  padding?: 'none' | 'small' | 'medium' | 'large';
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'elevated',
  padding = 'medium',
  className,
  ...props
}) => {
  const baseStyles = 'rounded-lg border';
  
  const variantStyles: Record<string, string> = {
    elevated: 'bg-white shadow-md border-gray-200',
    outlined: 'bg-transparent border-gray-300',
  };

  const paddingStyles: Record<string, string> = {
    none: '',
    small: 'p-3',
    medium: 'p-6',
    large: 'p-8',
  };

  return (
    <div
      className={clsx(
        baseStyles,
        variantStyles[variant],
        paddingStyles[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}; 