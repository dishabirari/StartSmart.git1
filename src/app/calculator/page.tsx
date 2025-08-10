
'use client';

import { useState } from 'react';

export default function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleCalculation = (operator: string) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult('Invalid input');
      return;
    }

    let res;
    switch (operator) {
      case '+':
        res = n1 + n2;
        break;
      case '-':
        res = n1 - n2;
        break;
      case '*':
        res = n1 * n2;
        break;
      case '/':
        if (n2 === 0) {
          setResult('Cannot divide by zero');
          return;
        }
        res = n1 / n2;
        break;
      default:
        res = 'Invalid operator';
    }
    setResult(res.toString());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Calculator</h1>
        <div className="flex flex-col space-y-4">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
            className="px-4 py-2 border rounded-md"
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
            className="px-4 py-2 border rounded-md"
          />
          <div className="flex justify-around">
            <button onClick={() => handleCalculation('+')} className="px-4 py-2 text-white bg-blue-500 rounded-md">+</button>
            <button onClick={() => handleCalculation('-')} className="px-4 py-2 text-white bg-blue-500 rounded-md">-</button>
            <button onClick={() => handleCalculation('*')} className="px-4 py-2 text-white bg-blue-500 rounded-md">*</button>
            <button onClick={() => handleCalculation('/')} className="px-4 py-2 text-white bg-blue-500 rounded-md">/</button>
          </div>
          {result && (
            <div className="mt-4 text-xl font-bold">
              Result: {result}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
