import { defineConfig } from "astro/config";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const repositoryOwner = process.env.GITHUB_REPOSITORY?.split("/")[0];
const isUserPage =
  repositoryName?.toLowerCase() === `${repositoryOwner?.toLowerCase()}.github.io`;
const base = process.env.PUBLIC_BASE_PATH ?? (repositoryName && !isUserPage ? `/${repositoryName}` : "/");
const site = process.env.PUBLIC_SITE_URL;

export default defineConfig({
  output: "static",
  base,
  site
});
