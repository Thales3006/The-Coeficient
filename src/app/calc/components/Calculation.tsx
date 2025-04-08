'use client';

import { Button, Card } from '@/components';
import { Variables } from '.';
import { useState } from 'react';

export default function Calculation() {
  const [liveResult, setResult] = useState(0);
  const [finalResult, setStaticResult] = useState(0);

  function showResult() {
    setStaticResult(liveResult);
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <Card className="flex flex-col items-center font-bold text-3xl">
        <h1>Your Coefficient</h1>
        <h1 className="text-7xl">{(finalResult * 100).toFixed(1) + '%'}</h1>
      </Card>

      <Variables title="Variables" setResult={setResult}></Variables>

      <Button onClick={showResult}>Calculate Coeficient</Button>
    </div>
  );
}
