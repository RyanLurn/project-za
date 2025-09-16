import {
  Link,
  Outlet,
  createRootRouteWithContext
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type Surreal from "surrealdb";

interface RouterContext {
  surrealClient: Surreal;
}

const RootLayout = () => (
  <>
    <div className="flex gap-2 p-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{" "}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </>
);

// NOTE: the double call is on purpose, since createRootRouteWithContext is a factory
export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout
});
