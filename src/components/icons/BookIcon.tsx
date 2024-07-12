import React from 'react';

export function BookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 4v16a1 1 0 0 0 1 1h16" className="stroke-zinc-400 dark:stroke-zinc-500" />
      <path
        d="M3 4a1 1 0 0 1 1-1h13a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a1 1 0 0 1-1-1V4z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path d="M7 8h10M7 12h10M7 16h6" className="stroke-zinc-400 dark:stroke-zinc-500" />
    </svg>
  );
}
