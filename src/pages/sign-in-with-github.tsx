import { GitHubIcon } from "../components/github-icon";
import { GoalTrakingLogo } from "../components/goal-traking-logo";
import { Button } from "../components/ui/button";

export function SignInWithGithub() {
  const githubUrl = new URL("/login/oauth/authorize", "https://github.com");

  githubUrl.searchParams.set("client_id", "Iv23li2o7vpC5KSJ4oRT");

  return (
    <main className="h-screen flex flex-col items-center justify-center gap-8">
      <GoalTrakingLogo />

      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Conclua suas metas semanais{" "}
        <span className="bg-gradient-to-r from-blue-400 via-pink-400 to-purple-700 bg-clip-text text-transparent font-bold">
          ganhe experiência
        </span>{" "}
        ao subir de nível! 🚀🔥
      </p>

      <Button asChild>
        <a href={githubUrl.toString()}>
          <GitHubIcon />
          Entrar com GitHub
        </a>
      </Button>
    </main>
  );
}
