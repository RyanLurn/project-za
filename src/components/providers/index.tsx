import { RouterProvider, createRouter } from "@tanstack/react-router";
import { GlobalQueryProvider } from "@/components/providers/global-query";
import { SurrealProvider } from "@/components/providers/surreal";
import { ThemeProvider } from "@/components/providers/theme";
import { Toaster } from "@/components/ui/sonner";
import { routeTree } from "@/routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function Providers() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <GlobalQueryProvider>
        <SurrealProvider autoConnect>
          <RouterProvider router={router} />
        </SurrealProvider>
      </GlobalQueryProvider>
      <Toaster closeButton richColors position="top-center" />
    </ThemeProvider>
  );
}

export { Providers };
