import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type Surreal from "surrealdb";

interface RouterContext {
  surrealClient: Surreal;
}

const RootLayout = () => (
  <>
    <div className="h-screen w-screen">
      <Outlet />
    </div>
    <TanStackRouterDevtools />
  </>
);

// NOTE: the double call is on purpose, since createRootRouteWithContext is a factory
export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout
});
