'use client';

import clsx from 'clsx';
import { ReactNode } from 'react';

export default function Select({
  children,
  className,
  onChange,
  value,
}: {
  children: ReactNode;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | number | undefined;
}) {
  return (
    <select
      className={clsx(
        'bg-white dark:bg-black border-white dark:border-white border-2 rounded-xl',
        className
      )}
      value={value}
      onChange={onChange}
    >
      {children}
    </select>
  );
}
