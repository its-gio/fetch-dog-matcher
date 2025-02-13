"use client";
import React from "react";

export default function LoginBtn({ text }: { text: string }) {
  return (
    <button
      type="button"
      className="flex text-sm rounded-full md:me-0 bg-slate-500 p-4 hover:bg-slate-300 text-white hover:text-black"
      onClick={() => {
        console.log({ text });
      }}
    >
      <span className="block text-sm ">{text}</span>
    </button>
  );
}
