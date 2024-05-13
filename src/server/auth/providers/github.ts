import { GitHub } from "arctic";

export const GITHUB_ID = "github";

export const github = new GitHub(process.env.GITHUB_CLIENT_ID!, process.env.GITHUB_CLIENT_SECRET!, {
  redirectURI: process.env.GITHUB_REDIRECT_URI!,
});

export type GitHubUser = {
  id: number;
  login: string;
  email: string;
  name: string | null;
};

export const getGitHubUser = async (accessToken: string): Promise<GitHubUser> => {
  return await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};
