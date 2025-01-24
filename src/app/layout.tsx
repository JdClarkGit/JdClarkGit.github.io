import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Name - Personal Website",
  description: "Showcase of projects and work by Your Name",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        {children}
      </body>
    </html>
  );
}
