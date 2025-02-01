"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { HeroUIProvider } from "@heroui/react";
import UserProvider from "@/context/user.provider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Provider } from "react-redux";
import { AppStore, store } from "@/redux/store";
import { useRef } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store()
  }


  return (
    <Provider store={storeRef.current}>


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
    </Provider>
  );
}
