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
        'bg-black dark:bg-white text-white dark:text-black rounded-xl p-3 font-bold flex flex-col items-center',
        className
      )}
    >
      {children}
    </button>
  );
}
