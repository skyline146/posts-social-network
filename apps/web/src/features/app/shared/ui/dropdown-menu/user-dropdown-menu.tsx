import { Button } from '@/features/shared/ui/button';
import { NavLink } from '@/features/shared/ui/link';
import { ProfilePicture } from '@/features/shared/ui/profile-picture';
import {
  IconNotes,
  IconUsers,
  IconTool,
  IconBell,
  IconChevronDown,
} from '@tabler/icons-react';
import Link from 'next/link';
import { getCurrentUser } from '../../get-current-user';
import { SignOutButton } from './sign-out-button';

export const UserDropdownMenu = async () => {
  const user = await getCurrentUser();

  return (
    <>
      {user ? (
        <div className='group/dropdown min-w-[200px] sm:relative'>
          <div className='flex items-center justify-center gap-2'>
            <ProfilePicture user={user} className='size-12' />
            <p className='m-0'>
              {user.firstName} {user.lastName}
            </p>
            <IconChevronDown className='transition-transform duration-300 group-hover/dropdown:rotate-180' />
          </div>
          <nav className='invisible absolute left-0 right-0 m-auto w-3/4 translate-y-3 scale-90 pt-5 opacity-0 transition-all duration-300 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 group-hover/dropdown:scale-100 group-hover/dropdown:opacity-100 sm:w-full'>
            <ul className='rounded-md bg-neutral-900 *:p-3'>
              <li>
                <NavLink href='/me/notifications' icon={<IconBell />}>
                  Notifications
                </NavLink>
              </li>
              <li>
                <NavLink href='/me/posts' icon={<IconNotes />}>
                  My posts
                </NavLink>
              </li>
              <li>
                <NavLink href='/me/friends' icon={<IconUsers />}>
                  Friends
                </NavLink>
              </li>
              <li>
                <NavLink href='/me/settings' icon={<IconTool />}>
                  Settings
                </NavLink>
              </li>
              <li>
                <SignOutButton />
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <Link href='/auth/sign-in'>
          <Button>Login</Button>
        </Link>
      )}
    </>
  );
};

export const UserDropdownMenuSkeleton = () => {
  return (
    <div className='flex items-center gap-2'>
      <div className='size-11 animate-pulse rounded-full bg-neutral-800' />
      <div className='h-11 w-48 animate-pulse rounded-md bg-neutral-800' />
    </div>
  );
};
