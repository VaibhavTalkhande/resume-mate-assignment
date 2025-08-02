import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FormProvider } from "@/context/FormContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "resumemate pdf generator",
  description:"this is assignment of internship"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FormProvider>
          <h1 className="text-xl mb-4 text-center">PDF Generator</h1>
          <div className="max-w-3xl mx-auto p-4 w-full sm:p-6">
            {children}
          </div>
        </FormProvider>
      </body>
    </html>
  );
}
