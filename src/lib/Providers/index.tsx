"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { HeroUIProvider } from "@heroui/react";
import UserProvider from "@/context/user.provider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import {ThemeProvider as NextThemesProvider} from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <AntdRegistry>
      <HeroUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
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
        </NextThemesProvider>
      </HeroUIProvider>
    </AntdRegistry>
  );
}
