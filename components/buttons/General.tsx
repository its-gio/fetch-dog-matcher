"use client";
import React from "react";

export default function GeneralBtn({
  text,
  ...props
}: {
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}) {
  return (
    <button
      type="button"
      className="flex text-sm rounded-full md:me-0 p-4 invert-bg hover:bg-slate-300 hover:text-black"
      {...props}
    >
      {text}
    </button>
  );
}
