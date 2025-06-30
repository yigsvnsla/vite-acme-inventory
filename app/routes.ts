import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("./routes/auth/layout.tsx", [
    route("/auth/sign-in", "./routes/auth/sign-in/index.tsx"),
    route("sign-up", "./routes/auth/sign-up/index.tsx"),
  ]),
] satisfies RouteConfig;
