'use client';

import { useEffect, useState } from 'react';
import { InputBox, Button } from '@/components';

export default function Absences({
  onChange,
}: {
  onChange: (result: number) => void;
}) {
  const [absence, setAbsence] = useState<string>('');
  const [total, setTotal] = useState<string>('');

  const handleChange = (newAbsence: string, newTotal: string) => {
    let absence = parseInt(newAbsence);
    let total = parseInt(newTotal);
    if (isNaN(absence) || absence < 0) absence = 0;
    if (isNaN(total) || total < 1) total = 1;
    if (absence > total) return;
    setAbsence(absence.toString());
    setTotal(total.toString());
    onChange(absence / total);
  };

  return (
    <div className="flex-col flex gap-2">
      <InputBox
        title={`Your absences`}
        type="number"
        value={absence}
        placeholder="0"
        onChange={(newValue) => handleChange(newValue, total)}
      />
      <InputBox
        title={`Total absences`}
        type="number"
        value={total}
        placeholder="1"
        onChange={(newValue) => handleChange(absence, newValue)}
      />
    </div>
  );
}
