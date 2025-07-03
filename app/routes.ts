import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("./routes/auth/layout.tsx", [
    route("/auth/sign-in", "./routes/auth/sign-in/index.tsx"),
    route("/auth/sign-up", "./routes/auth/sign-up/index.tsx"),
  ]),
  route("/api/auth/*", "./routes/api/auth.$.ts")
] satisfies RouteConfig;
