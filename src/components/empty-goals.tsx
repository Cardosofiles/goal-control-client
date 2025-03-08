import { DialogTrigger } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";

import { GoalTrakingLogo } from "./goal-traking-logo";
import { RocketTrakingIcon } from "./rocket-traking-icon";
import { Button } from "./ui/button";

export function EmptyGoals() {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-8">
      <GoalTrakingLogo />

      <RocketTrakingIcon />

      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou{" "}
        <span className="bg-gradient-to-r from-blue-400 via-pink-400 to-purple-700 bg-clip-text text-transparent font-bold">
          nenhuma meta
        </span>
        , que tal cadastrar uma agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </main>
  );
}
