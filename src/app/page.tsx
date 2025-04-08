import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-4xl">Welcome</h1>
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Link href="/calc">Calculate Panizio Coeficient</Link>
      </main>
    </>
  );
}
