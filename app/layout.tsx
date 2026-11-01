import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Translator from "@/components/Translator";

export const metadata: Metadata = {
  title: "Laila El Kabrane | Python Developer and Data Analyst",
  description: "Portfolio of Laila El Kabrane: Python development, data analysis and full stack projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <Translator />
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
