import './globals.css'
import HeaderComponent from '@/components/header/HeaderComponent'
import FooterComponent from '@/components/footer/FooterComponent'

export const metadata = {
  title: 'DigiKard',
  description: 'Tu presencia digital',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
        <body className="w-full h-full">
            <HeaderComponent />
            {children}
            <FooterComponent />
        </body>
    </html>
  )
}
