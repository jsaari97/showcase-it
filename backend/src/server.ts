import Koa from "koa";
import koaRouter from "koa-router";
import bodyParser from "koa-body";
import helmet from "koa-helmet";

import { rootRouter } from "./routes";

const app = new Koa();

const api = new koaRouter().use("/", rootRouter.routes());

app.use(helmet()).use(bodyParser()).use(api.routes()).use(api.allowedMethods());

const bootstrap = async () => {
  const port = process.env.PORT || 3002;

  app.listen(port);

  console.log(`Server running on http://localhost:${port}`);
};

bootstrap();
