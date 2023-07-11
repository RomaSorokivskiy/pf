import './globals.css'
import { Inter } from 'next/font/google'
import Footer from "@/app/components/footer/footer";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SorokSkull',
  description: 'Portfolio and blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{minHeight:"100vh"}}>
            {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
