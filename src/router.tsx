import { createBrowserRouter } from "react-router-dom";

import { Aplication } from "./pages/aplication";
import { SignInWithGithub } from "./pages/sign-in-with-github";
import { SignInWithGithubCallback } from "./pages/sign-in-with-github-callback";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInWithGithub />,
  },
  {
    path: "/app",
    element: <Aplication />,
  },
  {
    path: "/auth/github/callback",
    element: <SignInWithGithubCallback />,
  },
]);
