import Link from 'next/link';
import { InlineMath } from '@/components';
import { Calculation } from './components';

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-[32px] items-center justify-center">
        <h1 className="font-bold text-3xl">Panizio Coeficient</h1>
        <InlineMath math="\phi(x_0,x_1,...,x_n)=1-\sqrt[n]{\prod^n_{i=0}(1-x_i)}" />
      </div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Calculation />
      </main>
      <footer>
        <Link href="/">Initial page</Link>
      </footer>
    </>
  );
}
