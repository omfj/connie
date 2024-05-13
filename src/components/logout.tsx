"use client";

import { logout } from "@/actions/log-out";

export default function LogOutButton() {
  return (
    <button onClick={() => logout()} className="px-2 hover:underline">
      Logg ut
    </button>
  );
}
