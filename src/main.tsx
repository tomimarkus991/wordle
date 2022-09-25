import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

import { AppProvider, SidebarProvider } from "context";
import { Router } from "routes";
import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      // onError: e => {
      //   const error = e as Error;
      //   console.log('error', error);

      //   showErrorToast({
      //     title: 'Error useFetchGroupData',
      //     description: error.message,
      //   });
      //   throw new Error(error.message);
      // },
    },
  },
});

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <SidebarProvider>
          <BrowserRouter>
            <Router />
            <Toaster />
          </BrowserRouter>
        </SidebarProvider>
      </AppProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
