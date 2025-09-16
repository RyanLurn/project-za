import { GlobalQueryProvider } from "@/components/providers/global-query";
import { RoutesProvider } from "@/components/providers/routes";
import { SurrealProvider } from "@/components/providers/surreal";
import { ThemeProvider } from "@/components/providers/theme";
import { Toaster } from "@/components/ui/sonner";

function Providers() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <GlobalQueryProvider>
        <SurrealProvider autoConnect>
          <RoutesProvider />
        </SurrealProvider>
      </GlobalQueryProvider>
      <Toaster closeButton richColors position="top-center" />
    </ThemeProvider>
  );
}

export { Providers };
