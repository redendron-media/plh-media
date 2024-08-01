import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PLH Media",
  description: "Helping founders get more eyeballs on their brand and more money in their business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <Script src="https://lq3-production01.s3.amazonaws.com/lead_quizzes_3.0/tracking/js/properties/ihexyypuapuk3g.js"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
