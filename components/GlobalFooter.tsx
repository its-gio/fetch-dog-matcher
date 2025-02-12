import React from "react";

export default function GlobalFooter() {
  return (
    <footer className="sticky bottom-0 z-[-10] p-10 flex justify-between">
      <div>&copy; All rights reserved.</div>
      {/* TODO: Figure out z-index */}
      <div>
        <a href="http://its-g.io" target="_blank">
          its-g.io
        </a>
      </div>
    </footer>
  );
}
