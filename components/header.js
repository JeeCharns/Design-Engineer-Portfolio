import Navigation from "./navigation";
import Link from "next/link";
import DarkMode from "./dark-mode";
import useServerDarkMode from "@/hooks/user-server-dark-mode";

export default function Header() {
  const theme = useServerDarkMode();
  return (
    <header className="flex justify-between align-top md:items-center mt-4">
      <div className="flex items-center md:space-x-8">
        <div className="hidden md:block">
          <Link href="/" className="text-xl font-mono">
            George Charnley
          </Link>
        </div>
        <Navigation />
      </div>
      <DarkMode defaultTheme={theme}></DarkMode>
    </header>
  );
}
