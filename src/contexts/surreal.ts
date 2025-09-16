import { createContext } from "react";
import { Surreal } from "surrealdb";

interface SurrealProviderState {
  /** The Surreal instance */
  client: Surreal;
  /** Whether the connection is pending */
  isConnecting: boolean;
  /** Whether the connection was successfully established */
  isSuccess: boolean;
  /** Whether the connection rejected in an error */
  isError: boolean;
  /** The connection error, if present */
  error: unknown;
  /** Connect to the Surreal instance */
  connect: () => Promise<true>;
  /** Close the Surreal instance */
  close: () => Promise<true>;
}

const SurrealContext = createContext<SurrealProviderState | undefined>(
  undefined
);

export { SurrealContext };
export type { SurrealProviderState };
