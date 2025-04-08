'use client';

import { OutputBox } from '@/components';
import { Tests } from './';

export default function Variable({
  value,
  onChange,
}: {
  value: number;
  onChange: (newValue: number) => void;
}) {
  return (
    <div className="border-white border-5 p-6 rounded-xl flex gap-10 w-128">
      <Tests onChange={onChange} />
      <OutputBox value={value.toFixed(4)} className="w-32 h-32 truncate" />
    </div>
  );
}
