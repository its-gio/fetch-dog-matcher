import React from "react";

export default function GlobalFooter() {
  const thisYear = new Date().getFullYear();
  return (
    <footer className="p-10 flex justify-between text-sm text-stone-500">
      <div>
        &copy; Copyright {thisYear}.{" "}
        <a href="http://its-g.io" target="_blank">
          its-g.io
        </a>
        . All Rights Reserved.
      </div>
    </footer>
  );
}
