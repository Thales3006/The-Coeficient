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
      className={clsx('border-white border-4 p-4 rounded-xl gap-2', className)}
    >
      {children}
    </div>
  );
}
