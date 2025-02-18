"use client";
import React from "react";

export default function GeneralBtn({
  text,
  action,
}: {
  text: string;
  action: () => void;
}) {
  return (
    <button
      type="button"
      className="flex text-sm rounded-full md:me-0 bg-slate-500 p-4 hover:bg-slate-300 text-white hover:text-black"
      onClick={action}
    >
      <span className="block text-sm ">{text}</span>
    </button>
  );
}
