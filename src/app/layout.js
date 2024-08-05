import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata   
 = {
  title: "PLH Media",
  description: "Helping founders get more eyeballs on their brand and more money in their business",
};

export default function RootLayout({ children }) {
  const iframeUrl = 'https://content.leadquizzes.com/lp/FRAGi-3b_w?embed=1'; // Replace with your actual iframe URL

  return (
    <html lang="en">
      <head>
        <Script src="https://lq3-production01.s3.amazonaws.com/lead_quizzes_3.0/tracking/js/properties/ihexyypuapuk3g.js" />
        <div id='inline-embed-iframe' class='inline-embed-full' style={{ borderRadius: '5px', overflow: 'hidden' }}>
          <iframe src={iframeUrl} frameborder="0" style={{ width: "100%", float: "left" }} />
        </div>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
