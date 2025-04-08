"use client";

import clsx from "clsx";

export default function OutputBox({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  return (
    <>
      <div
        className={clsx(
          "flex-col flex items-center border-2 p-2 rounded-xl",
          className,
        )}
      >
        <h2>Output</h2>
        <p className="text-2xl">{value}</p>
      </div>
    </>
  );
}
