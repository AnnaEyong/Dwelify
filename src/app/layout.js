import { Urbanist } from 'next/font/google';
import "./globals.css";
import NavbarComponent from '../components/navbar/NavbarComponent';
import FooterComponent from '@/components/footer/FooterComponent';
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'


const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Dwelify",
  description:
    " An intuitive and feature-rich platform that streamlines the home buying, and selling process, making it easier for users to achieve their real estate goals.",
  icons: {
    icon: "/D.png",
    apple: "/D.png",
    shortcut: "/D.png",
  },
  openGraph: {
    title: "Dwelify",
    description:
      "A comprehensive real estate platform where users can search, explore, and discover properties that match their needs and preferences. Beautiful, fast, and responsive Real Estate web app built with Next.js.",
    url: "https://a0.muscache.com/pictures/miso/Hosting-70801/original/049d48b6-1e55-4894-97b2-7e65343bd8d3.jpeg", // update with your actual URL
    siteName: "Dwelify",
    images: [
      {
        url: "https://a0.muscache.com/pictures/miso/Hosting-70801/original/049d48b6-1e55-4894-97b2-7e65343bd8d3.jpeg", // change this to your OG image URL
        width: 1200,
        height: 630,
        alt: "Dwelify",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dwelify",
    description:
      "Explore detailed Real Estate info with a modern, responsive web app powered by Next.js.",
    images: ["https://a0.muscache.com/pictures/miso/Hosting-70801/original/049d48b6-1e55-4894-97b2-7e65343bd8d3.jpeg"], // same image as above
    creator: "@yourhandle", // optional
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" className={urbanist.className}>
      <body className={urbanist.className}>

        <NavbarComponent />
        {children}
        <FooterComponent />

      </body>
    </html>
    </ClerkProvider>
  );
}
