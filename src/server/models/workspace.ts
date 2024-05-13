import { db } from "../db/drizzle";

export class Workspace {
  static async getForUser(userId: string) {
    return await db.query.usersToWorkspaces
      .findMany({
        where: (utw, { eq }) => eq(utw.userId, userId),
        with: {
          workspace: true,
        },
      })
      .then((res) => res.map((r) => r.workspace));
  }

  static async get(id: string) {
    return await db.query.workspaces.findFirst({ where: (w, { eq }) => eq(w.id, id) });
  }
}
