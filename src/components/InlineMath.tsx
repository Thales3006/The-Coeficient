'use client';
import clsx from 'clsx';
import katex from 'katex';

export default function InlineMath({ math, className }: { 
  math: string;
  className?: string;

}) {
  const html = katex.renderToString(math, {
    throwOnError: false,
  });

  return (
    <span
      dangerouslySetInnerHTML={{ __html: html }}
      className={clsx("inline-block text-xl font-bold",className)}
    />
  );
}