"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { NextUIProvider } from "@nextui-org/react";
import UserProvider from "@/context/user.provider";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <AntdRegistry>
      <NextUIProvider>
        <UserProvider>
          <QueryClientProvider client={queryClient}>
            <ToastContainer
              pauseOnFocusLoss={false}
              pauseOnHover={false}
              autoClose={2000}
            />
            {children}
          </QueryClientProvider>
        </UserProvider>
      </NextUIProvider>
    </AntdRegistry>
  );
}
