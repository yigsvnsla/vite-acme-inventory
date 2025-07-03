import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("./routes/auth/layout.tsx", [
    route("/auth/sign-in", "./routes/auth/sign-in/index.tsx"),
    route("/auth/sign-up", "./routes/auth/sign-up/index.tsx"),
  ]),
  route("/api/auth/*", "./routes/api/auth.$.ts"),

  route("dashboard", "./routes/dashboard/layout.tsx", [
    index("./routes/dashboard/index.tsx"),
    // ruta adicional:
    // route("settings", "./routes/dashboard/settings.tsx")
  ]),
] satisfies RouteConfig;

