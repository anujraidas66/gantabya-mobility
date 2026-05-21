
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar/page";
import Footer from "../components/Footer/page";



export const metadata: Metadata = {
  title: "Gantabya Mobility",
  description: "EV Mobility Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        {/* Navbar */}
        <Navbar />  

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />
        
      </body>
    </html>
  );
}