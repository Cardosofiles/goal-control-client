import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: "../../node/goal-control-server/swagger.json",
    output: {
      target: "./src/api/generated/api.ts",
      client: "react-query",
      httpClient: "fetch",
      clean: true,

      override: {
        fetch: {
          includeHttpResponseReturnType: false,
        },

        mutator: {
          path: "./src/api/client.ts",
          name: "http",
        },
      },
    },
  },
});
