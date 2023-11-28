import './globals.css'

export const metadata = {
  title: 'Roomio | Your favorite room await',
  description: 'Explore the intersection of beautiful modern design and timeless aesthetics with Roomio, your premier destination for interior design in Richmond, Virginia.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
