import Header from './components/Header'
import './globals.css'

export const metadata = {
  title: 'Pradip Subedi',
  description: 'Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
