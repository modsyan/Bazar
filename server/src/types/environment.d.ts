export{};

declare global {
  namespace NodeJs {
    interface ProcessEnv {
      NODE_ENV: string;
      PORT: number;
      DATABASE_REMOTE_DEVELOPMENT: string;
      DATABASE_REMOTE_PRODUCTION: string;
      DATABASE_LOCAL_DEVELOPMENT: string;
    }
  }
}
