declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      SERVER_URL: string;
    }
  }
}

export {};
