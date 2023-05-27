export interface IProcessEnv {
  NODE_ENV: "development" | "production";
  PORT: string;
  DATABASE_REMOTE_DEVELOPMENT: string;
  DATABASE_REMOTE_PRODUCTION: string;
  DATABASE_LOCAL_DEVELOPMENT: string;
  JWT_SECRET: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends IProcessEnv {}
  }
}

export {};
