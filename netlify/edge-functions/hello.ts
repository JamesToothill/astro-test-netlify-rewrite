import { Config, Context } from "https://edge.netlify.com";

export default async (req: Request, { cookies, geo }: Context) => {
    return new URL("/testing", "https://eosdtzefjgx7afv.m.pipedream.net/");
};

export const config: Config = {
  path: "/"
};