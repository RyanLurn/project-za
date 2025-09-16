import { useCallback, useEffect, useMemo, useState } from "react";
import { surrealdbWasmEngines } from "@surrealdb/wasm";
import { useMutation } from "@tanstack/react-query";
import Surreal from "surrealdb";
import { SurrealContext, type SurrealProviderState } from "@/contexts/surreal";
import { env } from "@/lib/env";

interface SurrealProviderProps {
  children: React.ReactNode;
  /** Optional existing Surreal client */
  client?: Surreal;
  /** Auto connect on component mount, defaults to true */
  autoConnect?: boolean;
}

function SurrealProvider({
  children,
  client,
  autoConnect = true
}: SurrealProviderProps) {
  // Surreal instance remains stable across re-renders
  const [surrealInstance] = useState(
    () =>
      client ??
      new Surreal({
        engines: surrealdbWasmEngines()
      })
  );

  // React Query mutation for connecting to Surreal
  const {
    mutateAsync: connectMutation,
    isPending,
    isSuccess,
    isError,
    error,
    reset
  } = useMutation({
    mutationFn: () =>
      surrealInstance.connect(env.VITE_SURREAL_ENDPOINT, {
        namespace: env.VITE_SURREAL_NAMESPACE,
        database: env.VITE_SURREAL_DATABASE
      })
  });

  // Wrap mutateAsync in a stable callback
  const connect = useCallback(() => connectMutation(), [connectMutation]);

  // Wrap close() in a stable callback
  const close = useCallback(() => surrealInstance.close(), [surrealInstance]);

  // Auto-connect on mount (if enabled) and cleanup on unmount
  useEffect(() => {
    if (autoConnect) {
      connect();
    }

    return () => {
      reset();
      surrealInstance.close();
    };
  }, [autoConnect, connect, reset, surrealInstance]);

  // Memoize the context value
  const value: SurrealProviderState = useMemo(
    () => ({
      client: surrealInstance,
      isConnecting: isPending,
      isSuccess,
      isError,
      error,
      connect,
      close
    }),
    [surrealInstance, isPending, isSuccess, isError, error, connect, close]
  );

  return <SurrealContext value={value}>{children}</SurrealContext>;
}

export { SurrealProvider };
