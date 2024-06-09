"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Head from "next/head";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  useEffect(()=>{
AOS.init();
  },[])
  return (
    <html lang="en">
      <Head>
      <title>Nikhil</title>
      <meta name="description" content="This website is created by Nikhil for demo" />
        <link rel="icon" href="/assets/favicon2.png" />
        <link rel="apple-touch-icon" href="/assets/favicon2.png" />r
      </Head>
      <body data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="0" className={inter.className} ><Header/>{children}<Footer/></body>
    </html>
  );
}
