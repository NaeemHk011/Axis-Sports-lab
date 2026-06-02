import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <NextThemesProvider
    attribute="class"
    defaultTheme="dark"
    enableSystem={false}
    storageKey="axis-theme"
    themes={["light", "dark"]}
  >
    {children}
  </NextThemesProvider>
);

export default ThemeProvider;
