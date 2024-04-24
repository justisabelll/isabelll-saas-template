'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { checkAuthClient } from '@/lib/auth/utils';
import { UserButton } from '@clerk/nextjs';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

export default function Nav() {
  const pathname = usePathname();
  const isUserAuth = checkAuthClient();

  return (
    <div className="flex justify-between items-center p-4">
      <span className="text-xl font-bold">Logo</span>
      <NavigationMenu className="flex justify-center flex-grow mx-4">
        <NavigationMenuList className="flex gap-4">
          {defaultLinks
            .filter(
              (link) =>
                isUserAuth || (!link.needsAuth && link.href !== pathname)
            )
            .map((link) => (
              <NavigationMenuItem
                key={link.title}
                className="hover:text-primary"
              >
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${
                      pathname === link.href ? 'text-primary' : ''
                    }`}
                  >
                    {link.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
        </NavigationMenuList>
        <NavigationMenuViewport />
      </NavigationMenu>
      <div className="md:flex ">
        {isUserAuth ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <Link href="/sign-in" passHref>
            <Button size="sm" className="mr-4">
              Login / Sign Up
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

interface links {
  title: string;
  href: string;
  needsAuth: boolean;
}

const defaultLinks: links[] = [
  { href: '/', title: 'Home', needsAuth: false },
  { href: '/blog', title: 'Blog', needsAuth: false },
];
