import Image from 'next/image';

import { Experience as LifeExperience } from '../data/lifeApi';
import { BriefcaseIcon } from './icons/BriefcaseIcon';
import React from 'react';

export const Experience = () => {
  return (
    <div className="w-full rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Proof of Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {LifeExperience.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt="Logo"
                className="h-6 w-6 rounded object-cover"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Experience Title</dt>
              <dd className="flex-none text-md font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>

              <dt className="sr-only">Experience Description</dt>
              <dd className="w-full text-sm text-zinc-500 dark:text-zinc-400">{role.title}</dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  );
};
