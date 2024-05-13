import Link from "next/link";
import { redirect } from "next/navigation";

import { ensureUser } from "@/server/auth/nextjs";
import { Workspace } from "@/server/models/workspace";

export default async function MyProfile() {
  const { user } = await ensureUser();

  const workspaces = await Workspace.getForUser(user.id);

  return (
    <main className="mx-auto mb-32 flex w-full max-w-screen-lg flex-col rounded-lg border bg-white p-8">
      <h1 className="mb-6 font-serif text-3xl font-medium">Min profil</h1>

      <div className="flex flex-col gap-4">
        <p>Hei, {user.name}!</p>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <h2 className="font-serif text-xl font-medium">Arbeidsområder</h2>
        {workspaces.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {workspaces.map((workspace) => (
              <li key={workspace.id} className="flex flex-col gap-2">
                <Link
                  className="font-serif text-xl font-medium hover:underline"
                  href={`/workspace/${workspace.id}`}
                >
                  <h3>{workspace.name}</h3>
                </Link>
                <p>{workspace.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Du er ikke medlem av noen arbeidsområder.</p>
        )}

        <Link
          href="/workspace/create"
          className="flex h-10 w-fit flex-row items-center justify-center gap-4 rounded-lg bg-primary px-4 font-medium text-white"
        >
          Opprett arbeidsområde
        </Link>
      </div>
    </main>
  );
}
