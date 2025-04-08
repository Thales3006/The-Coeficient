'use client';

import clsx from 'clsx';
import { ReactNode } from 'react';

export default function Button({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'bg-white rounded-xl p-3 text-black font-bold flex flex-col items-center',
        className
      )}
    >
      {children}
    </button>
  );
}
