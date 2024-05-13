"use client";

import { useEffect, useState } from "react";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

import { createWorkspace } from "./_actions";

export const CreateWorkspaceForm = () => {
  const { execute, result } = useAction(createWorkspace);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState<"company" | "student">("company");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    execute({
      name,
      description,
      type,
    });
  };

  useEffect(() => {
    if (result.data) {
      toast.success("Arbeidsområde opprettet!");
    }
  }, [result]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-serif text-lg font-medium">
          Navn
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="h-10 w-full rounded-lg border p-2"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="description" className="font-serif text-lg font-medium">
          Beskrivelse
        </label>
        <textarea
          id="description"
          name="description"
          className="h-32 w-full rounded-lg border p-2"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="type" className="font-serif text-lg font-medium">
          Type
        </label>
        <select
          id="type"
          name="type"
          className="h-10 w-full rounded-lg border p-2"
          onChange={(e) => setType(e.target.value as "company" | "student")}
          value={type}
        >
          <option value="company">Bedrift</option>
          <option value="student">Student</option>
        </select>
      </div>

      <button
        type="submit"
        className="h-10 w-fit flex-row items-center justify-center gap-4 rounded-lg bg-primary px-4 font-medium text-white"
      >
        Opprett arbeidsområde
      </button>
    </form>
  );
};
