import type { Metadata } from 'next';
import {playfair, gilroy} from "@/styles/font";
import '../styles/globals.css';
import { AuthContextProvider } from './context/authContext';


export const metadata: Metadata = {
  title: 'Career Coach',
  description: "Black Sis in STEM's AI Career Coach",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${gilroy.className} ${playfair.className}`}>
      
        <AuthContextProvider>
        {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
