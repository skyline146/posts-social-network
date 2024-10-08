import { IconBrandTelegram } from '@tabler/icons-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writle - About',
  description:
    'Page that contains information about project, author, used technologies.',
};

export default function About() {
  return (
    <section className='flex h-full flex-col items-center gap-10 font-mono'>
      <h1 className='text-5xl font-semibold'>
        About <strong>{`<WRITLE>`}</strong>
      </h1>
      <p className='text-xl'>
        Pet project by{' '}
        <a
          href='https://t.me/diman404'
          target='_blank'
          className='group/link text-neutral-400 hover:text-white'
        >
          @diman404
          <IconBrandTelegram className='inline-block opacity-0 transition-opacity duration-300 group-hover/link:opacity-100' />
        </a>
      </p>
      <div className='flex w-full flex-col justify-center gap-3 *:text-xl md:flex-row md:gap-0'>
        <p className='max-w-[400px] text-balance'>
          Web application for publishing posts/articles, adding friends, viewing
          posts by other people based on your interests.
        </p>
        <div>
          <p>Used technologies:</p>
          <ul className='list-disc'>
            <li>
              Frontend -{' '}
              <ResourceLink title='Next.js' link='https://nextjs.org/' />,{' '}
              <ResourceLink
                title='TailwindCSS'
                link='https://tailwindcss.com/'
              />
            </li>
            <li>
              Backend - <ResourceLink title='Hono' link='https://hono.dev/' />,{' '}
              <ResourceLink
                title='PostgreSQL'
                link='https://www.postgresql.org/'
              />
              ,{' '}
              <ResourceLink
                title='DrizzleORM'
                link='https://orm.drizzle.team/'
              />
            </li>
            <li>
              Tools -{' '}
              <ResourceLink title='Turborepo' link='https://turbo.build/' />,{' '}
              <ResourceLink title='Docker' link='https://www.docker.com/' />,{' '}
              <ResourceLink title='Bun' link='https://bun.sh/' />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const ResourceLink = ({ title, link }: { title: string; link: string }) => (
  <a
    href={link}
    target='_blank'
    className='group/link text-neutral-400 hover:text-white'
  >
    {title}
  </a>
);
