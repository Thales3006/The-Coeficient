'use client';

import clsx from 'clsx';
import { ReactNode } from 'react';

export default function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        'border-white border-5 p-6 rounded-xl flex gap-10',
        className
      )}
    >
      {children}
    </div>
  );
}
