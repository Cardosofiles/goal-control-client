import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import Cookies from "universal-cookie";

import { useAuthenticateFromGithub } from "../api/generated/api";

export function SignInWithGithubCallback() {
  const navigate = useNavigate();

  const { mutateAsync: authenticateFromGithub } = useAuthenticateFromGithub();

  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  if (!code) {
    return <Navigate to="/" />;
  }

  const timerCookies = 60 * 60 * 24; // 1 day in seconds

  useEffect(() => {
    authenticateFromGithub({
      data: { code },
    }).then((response) => {
      const token = response.data.token;
      const cookie = new Cookies();

      cookie.set("goal-control.token", token, {
        path: "/",
        maxAge: timerCookies,
      });

      navigate("/app");
    });
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <Loader2 className="size-8 text-gray-500 animate-spin" />
    </div>
  );
}
