import Image from 'next/image';
import { Skills as SkillsExperience } from '../data/lifeApi';
import { BookIcon } from './icons/BookIcon';
import { Badge } from './Badge';

export const Skills = () => {
  return (
    <div className="max-w-[500px] rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BookIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Skills</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {SkillsExperience.map((skillGroup, index) => (
          <li key={index} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={skillGroup.logo}
                alt={`${skillGroup.type} Logo`}
                className="h-6 w-6 rounded object-cover"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">{skillGroup.type}</dt>
              <dd className="flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {skillGroup.type}
              </dd>
              <dt className="sr-only">Skills</dt>
              <dd className="w-full text-xs text-zinc-500 dark:text-zinc-400">
                {skillGroup.skills.map((skill) => (
                  <Badge key={skill} href={`/skills/${skill}`}>
                    {skill}
                  </Badge>
                ))}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  );
};
