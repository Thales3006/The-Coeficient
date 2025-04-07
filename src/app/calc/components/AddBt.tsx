'use client';

import { ReactNode } from "react";
import Image from 'next/image';
import { Button } from "@/components";

export default function AddBt({ children, onClick }: { 
  children: ReactNode;
  onClick: () => void;
 }) {
    return (
      <Button onClick={onClick}>
        <Image
            src="/plus.png"
            width={20}
            height={20}
            alt=""
        />
        {children}
      </Button>
    );
}