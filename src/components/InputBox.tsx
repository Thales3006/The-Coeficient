'use client';

import clsx from 'clsx';

export default function InputBox({
  title,
  value,
  type,
  className,
  placeholder,
  onChange,
}: {
  title?: string;
  value: string;
  type: string;
  className?: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
}) {
  return (
    <div>
      {title ? <h2>{title}</h2> : null}
      <input
        className={clsx('border-2 p-2 rounded-xl', className)}
        type={type}
        value={value}
        placeholder={clsx('', placeholder)}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
