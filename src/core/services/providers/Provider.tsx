import { QueryClient, QueryClientProvider } from "react-query";
import { StrictMode } from "react";

const Provider = ({ children }: { children: JSX.Element }) => {
  const client = new QueryClient();
  return (
    <StrictMode>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </StrictMode>
  );
};

export default Provider;
