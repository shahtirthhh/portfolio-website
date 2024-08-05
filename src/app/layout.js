import Providers from "@/components/themes/Providers";
import "./globals.css";

export const metadata = {
  title: "Shah Tirth",
  description: "Tirth Shah's portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-primary transition-colors custom_scroll overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
