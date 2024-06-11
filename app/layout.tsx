import "./styles/app.css"

export const metadata = {
  title: 'Auth • Next.js Template to Jump Start',
  description: 'Next.js Template to Jump Start',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
