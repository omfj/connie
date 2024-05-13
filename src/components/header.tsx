import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/connie-logo.png";
import { auth } from "@/server/auth/nextjs";
import LogOutButton from "./logout";

export const Header = async () => {
  const { user } = await auth();

  return (
    <header className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-2 py-12 lg:px-8">
      <div>
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={Logo}
            width={1000}
            height={1000}
            alt="Connie"
            className="hidden h-8 w-auto lg:block"
          />
          <h1 className="font-serif text-3xl font-medium">Connie</h1>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        {user ? (
          <>
            <HeaderItem href="/my-profile">Min profil</HeaderItem>
            <LogOutButton />
          </>
        ) : (
          <Link className="primary-button" href="/log-in">
            Logg inn
          </Link>
        )}
      </div>
    </header>
  );
};

export const HeaderItem = ({ href, children }: { href: string; children: string }) => {
  return (
    <Link className="px-2 hover:underline" href={href}>
      {children}
    </Link>
  );
};
