import { ensureUser } from "@/server/auth/nextjs";
import { CreateWorkspaceForm } from "./create-workspace-form";

export default async function CreateWorkspace() {
  await ensureUser();

  return (
    <main className="mx-auto mb-32 flex w-full max-w-screen-lg flex-col rounded-lg border bg-white p-8">
      <h1 className="mb-6 font-serif text-3xl font-medium">Opprett arbeidsområde</h1>

      <CreateWorkspaceForm />
    </main>
  );
}
