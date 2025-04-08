"use client";

import { Button } from "@/components";
import { Variables } from ".";
import { useState } from "react";

export default function Calculation() {
  const [liveResult, setResult] = useState(0);
  const [finalResult, setStaticResult] = useState(0);

  function showResult() {
    setStaticResult(liveResult);
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className="flex-col flex items-center 
        border-2 p-4 rounded-xl 
        font-bold text-3xl"
      >
        <h1>Your Coeficient</h1>
        <h1 className="text-7xl">{(finalResult * 100).toFixed(1) + "%"}</h1>
      </div>

      <Variables title="Variables" setResult={setResult}></Variables>

      <Button onClick={showResult}>Calculate Coeficient</Button>
    </div>
  );
}
