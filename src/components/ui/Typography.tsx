import React from 'react';
import clsx from 'clsx';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption';
  color?: 'primary' | 'secondary' | 'error' | 'inherit';
  align?: 'left' | 'center' | 'right';
  gutterBottom?: boolean;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body1',
  color = 'inherit',
  align = 'left',
  gutterBottom = false,
  className,
  ...props
}) => {
  const variantStyles: Record<string, string> = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-bold',
    h4: 'text-xl font-bold',
    h5: 'text-lg font-bold',
    h6: 'text-base font-bold',
    body1: 'text-base',
    body2: 'text-sm',
    caption: 'text-xs',
  };

  const colorStyles: Record<string, string> = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    error: 'text-red-600',
    inherit: 'text-inherit',
  };

  const alignStyles: Record<string, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const Component = variant.startsWith('h') ? variant : 'p';

  return (
    <Component
      className={clsx(
        variantStyles[variant],
        colorStyles[color],
        alignStyles[align],
        gutterBottom && 'mb-4',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}; 