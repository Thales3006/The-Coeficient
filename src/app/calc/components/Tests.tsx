'use client';

import { useState } from 'react';
import { InputBox, Button } from '@/components';
import { CloseBt } from './';

export default function Tests({
  onChange,
}: {
  onChange: (result: number) => void;
}) {
  const MAX_INPUTS = 10;
  const MAX_VALUE = 10;

  const [values, setValues] = useState<string[]>(['']);

  const handleChange = (index: number, newValue: string) => {
    const updatedValues = [...values];
    const n = parseFloat(newValue);
    if (n < 0 || n > MAX_VALUE) return;
    updatedValues[index] = newValue;
    setValues(updatedValues);
    onChange(calculateTotal(updatedValues));
  };

  const handleRemove = (index: number) => {
    if (values.length > 1) {
      const updatedValues = [...values];
      updatedValues.splice(index, 1);
      setValues(updatedValues);
      onChange(calculateTotal(updatedValues));
    }
  };

  const handleAdd = () => {
    if (values.length < MAX_INPUTS) {
      const updated = [...values, ''];
      setValues(updated);
      onChange(calculateTotal(updated));
    } else {
      window.alert('Too much inputs!');
    }
  };

  const calculateTotal = (arr: string[]) =>
    1 -
    arr.reduce((sum, val) => {
      const n = parseFloat(val);
      return sum + (isNaN(n) ? 0 : n);
    }, 0) /
      arr.length /
      MAX_VALUE;

  return (
    <div className="flex-col flex gap-2">
      <ul className="flex-col flex gap-2 items-center">
        {values.map((value, index) => (
          <li key={index} className="flex items-center gap-2 w-full">
            <InputBox
              title={`Test ${index + 1}`}
              type="number"
              value={value}
              placeholder="0.00"
              onChange={(newValue) => handleChange(index, newValue)}
            />
            {index !== 0 ? (
              <CloseBt onClick={() => handleRemove(index)} />
            ) : (
              <></>
            )}
          </li>
        ))}
      </ul>
      <Button onClick={() => handleAdd()}>Add Input</Button>
    </div>
  );
}
