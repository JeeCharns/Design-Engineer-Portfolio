import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import useServerDarkMode from "@/hooks/user-server-dark-mode";
import CookiesProviderClient from "@/components/cookies-provider-client";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "George Charnley",
  description: "George Charnley's blog and portfolio",
};

export default function RootLayout({ children }) {
  const theme = useServerDarkMode();
  return (
    <html lang="en" className={theme}>
      <body className={`${inter.variable} antialiased p-8`}>
        <CookiesProviderClient>
          <Header></Header>
          <main className="mt-12">{children}</main>
        </CookiesProviderClient>
      </body>
    </html>
  );
}
