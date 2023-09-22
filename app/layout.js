import './globals.css'


export const metadata = {
  title: ' Burger Hunt',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
