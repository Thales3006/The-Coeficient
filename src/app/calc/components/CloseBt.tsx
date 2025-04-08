'use client';

import Image from 'next/image';
import { Button } from '@/components';

export default function CloseBt({ onClick }: { onClick: () => void }) {
  return (
    <Button className="w-10 p-0" onClick={() => onClick()}>
      <Image src="/close.png" width={15} height={15} alt="" />
    </Button>
  );
}
