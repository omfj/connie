import { redirect } from "next/navigation";

import { auth } from "@/server/auth/nextjs";

export default async function LoginPage() {
  const { user } = await auth();

  if (user) {
    return redirect("/my-profile");
  }

  return (
    <main>
      <div className="mx-auto my-24 flex w-full max-w-72 flex-col gap-4 space-y-10 rounded-xl border-2 border-gray-400 bg-white p-10 shadow-lg">
        <h1 className="text-center font-serif text-3xl font-medium">Logg inn</h1>

        <div className="flex flex-col gap-4">
          <a
            href="/auth/github"
            className="flex h-10 flex-row items-center justify-center gap-4 rounded-lg bg-primary px-4 font-medium text-white"
          >
            Logg inn med GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
