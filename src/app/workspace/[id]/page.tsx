import { notFound } from "next/navigation";

import { Workspace } from "@/server/models/workspace";

type Props = {
  params: {
    id: string;
  };
};

export default async function WorkspaceHome({ params }: Props) {
  const workspace = await Workspace.get(params.id);

  if (!workspace) {
    return notFound();
  }

  return (
    <main className="mx-auto mb-32 flex w-full max-w-screen-lg flex-col rounded-lg border bg-white p-8">
      <h1 className="mb-6 font-serif text-3xl font-medium">{workspace.name}</h1>
      <p>{workspace.description}</p>
    </main>
  );
}
