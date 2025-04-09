'use client';

import { Card, OutputBox, Select } from '@/components';
import { Grades } from './';
import { useState } from 'react';

export default function Variable({
  value,
  onChange,
}: {
  value: number;
  onChange: (newValue: number) => void;
}) {
  const [option, setOption] = useState('Grades');

  const renderComponent = () => {
    switch (option) {
      case 'Grades':
        return <Grades onChange={onChange} />;
      case 'Absences':
        return <h1>AABSENCA</h1>;
      case 'Weather':
        return <h1>Ueda</h1>;
      default:
        return null;
    }
  };

  return (
    <Card className="flex">
      <div className="flex flex-col gap-1">
        <Select value={option} onChange={(e) => setOption(e.target.value)}>
          <option value="Grades">Grades</option>
          <option value="Absences">Absences</option>
          <option value="Weather">Weather</option>
        </Select>
        {renderComponent()}
      </div>
      <OutputBox value={value.toFixed(4)} className="w-32 h-32 truncate" />
    </Card>
  );
}
