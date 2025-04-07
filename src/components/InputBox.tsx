'use client';

import clsx from "clsx";

export default function InputBox({ title, value, type, className, onChange }: {
  title: string;
  value: string;
  type: string;
  className?: string;
  onChange: (newValue: string) => void;
}) {
  return (
    <div>
      <h2>{title}</h2>
      <input
        className={clsx("border-2 p-2 rounded-xl",className)}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}