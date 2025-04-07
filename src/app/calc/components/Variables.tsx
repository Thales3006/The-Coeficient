'use client';

import { useState } from "react";
import { Variable, AddBt, CloseBt} from ".";

export default function Variables({ title, setResult } : {
    title: string;
    setResult: (value: number) => void;
}){
    const [variables, setVariables] = useState([0]);
    const MAX_VAR = 10;

    const calculateCoeficient = (list: number[]) => {
        const prod = list.reduce((prod,x)=> prod * (1-x), 1);

        setResult(1-Math.pow(prod,1/variables.length));
    }

    const handleChange = (index: number, newValue: number) => {
        const updated = [...variables];
        updated[index] = newValue;
        setVariables(updated);
        calculateCoeficient(updated);
      };

    const handleRemove = (index: number) => {
        if (variables.length > 1) {
            const updated = [...variables];
            updated.splice(index, 1);
            setVariables(updated);
            calculateCoeficient(updated);
        }
    };

    const handleAdd = () => {
        if(variables.length < MAX_VAR){
            setVariables([...variables, 0])
        }else{
            window.alert("Too much variables!")
        }
    };

    return (
        <div className="flex flex-col items-center gap-6">
          <h1 className="font-bold">{title}</h1>
          {variables.length === 0? <p>No variables added</p> : null}
          <ul className="list-group flex flex-col items-center gap-4">
            {variables.map((value, index) => (
              <li key={index} className="flex items-center gap-2 w-full">
                <Variable 
                value={value}
                onChange={(newValue) => handleChange(index, newValue)}
                />
                {index!==0? <CloseBt onClick={() => handleRemove(index)} />: <></>}
              </li>
            ))}
          </ul>
          <AddBt onClick={handleAdd}>Add Variable</AddBt>
        </div>
    );
}