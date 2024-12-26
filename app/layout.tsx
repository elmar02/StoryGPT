import type { Metadata } from "next";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";
import Head from "next/head";
import {Poppins} from 'next/font/google' 
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s - StoryGPT',
    default: 'StoryGPT - Your Vision, Our Pen'
  },
  description: "Your Vision, Our Pen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/icon.ico"></link>
      </Head>
      <body className={`relative bg-slate-950 text-white ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
