import { Outlet, redirect } from "react-router";
import { AppSidebar } from "~/components/app-sidebar";
import { DataTable } from "~/components/data-table";
import { SectionCards } from "~/components/section-cards";
import { SiteHeader } from "~/components/site-header";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";
import data from "./data.json";
import type { Route } from "./+types/layout";
import { authClient } from "~/libs/auth.client";
import { SplashScreen } from "~/components/splash-screen";

export async function clientLoader({ request }: Route.ClientLoaderArgs) {
  const { data, error } = await authClient.getSession();

  if (!data) throw redirect("/auth/sign-in");
  console.log({ data, error });

  return data;
}

export function HydrateFallback() {
  return <SplashScreen />;
}

export default function DashboardLayout() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <Outlet />
                {/* <ChartAreaInteractive /> */}
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
