import ResponsiveAppBar from "@web/components/app-bar";
import AuthProvider from "@web/services/auth/auth-provider";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// import CssBaseline from "@mui/material/CssBaseline";
import { dir } from "i18next";
import "@web/services/i18n/config";
import type { Metadata } from "next";
import SnackbarProvider from "@web/components/snackbar-provider";
import { getServerTranslation } from "@web/services/i18n";
// import StoreLanguageProvider from "@web/services/i18n/store-language-provider";
// import ThemeProvider from "@web/components/theme-provider";
import LeavePageProvider from "@web/services/leave-page/leave-page-provider";
import QueryClientProvider from "@web/services/react-query/query-client-provider";
import queryClient from "@web/services/react-query/query-client";
import ReactQueryDevtools from "@web/services/react-query/react-query-devtools";
import GoogleAuthProvider from "@web/services/social-auth/google/google-auth-provider";
// import FacebookAuthProvider from "@web/services/social-auth/facebook/facebook-auth-provider";
// import ConfirmDialogProvider from "@web/components/confirm-dialog/confirm-dialog-provider";

import { Inter as FontSans } from "next/font/google";
import { cn } from "@web/lib/utils";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerTranslation("en", "common");

  return {
    title: t("title"),
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={"en"} dir={dir("en")}>
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          {/* <ThemeProvider> */}
          {/* <CssBaseline /> */}
          <SnackbarProvider maxSnack={3}>
            {/* <StoreLanguageProvider> */}
            {/* <ConfirmDialogProvider> */}
            <AuthProvider>
              <GoogleAuthProvider>
                {/* <FacebookAuthProvider> */}
                <LeavePageProvider>
                  <ResponsiveAppBar />
                  {children}
                </LeavePageProvider>
                {/* </FacebookAuthProvider> */}
              </GoogleAuthProvider>
            </AuthProvider>
            {/* </ConfirmDialogProvider> */}
            {/* </StoreLanguageProvider> */}
          </SnackbarProvider>
          {/* </ThemeProvider> */}
        </QueryClientProvider>
      </body>
    </html>
  );
}
