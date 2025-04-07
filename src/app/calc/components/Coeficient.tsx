'use client';

export default function OutputBox({ value}: { 
    value: string;
}) {
  return (
      <div className='flex-col flex items-center 
      border-2 p-4 rounded-xl 
      font-bold text-3xl'
      >
        <h1>Your Coeficient</h1>
        <h1 className="text-7xl">{value}</h1>
      </div>
    );
}