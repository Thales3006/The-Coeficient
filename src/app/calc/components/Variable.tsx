'use client';

import { Card, OutputBox } from '@/components';
import { Tests } from './';

export default function Variable({
  value,
  onChange,
}: {
  value: number;
  onChange: (newValue: number) => void;
}) {
  return (
    <Card className="flex w-128">
      <Tests onChange={onChange} />
      <OutputBox value={value.toFixed(4)} className="w-32 h-32 truncate" />
    </Card>
  );
}
