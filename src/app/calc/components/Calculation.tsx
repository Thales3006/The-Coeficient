'use client';

import { Button } from "@/components";
import Variables from "./Variables";
import { useState } from "react";
import { Coeficient } from ".";

export default function Calculation() {

    const [liveResult, setResult] = useState(0);
    const [finalResult, setStaticResult] = useState(0);

    function showResult(){
        setStaticResult(liveResult);
    }

    return (
      <div className="flex flex-col items-center gap-6">
        <Coeficient value={"%"+(finalResult*100).toFixed(1)}/>

        <Variables title="Variables" setResult={setResult}></Variables>

        <Button onClick={showResult}>Calculate Coeficient</Button>
      </div>
    );
}