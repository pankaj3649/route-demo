import './globals.css'



export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style = { { border: '1px solid blue' ,padding: '2px', height: '100vh'}}>
        <header style = { { border: '1px solid grey' ,padding: '2px'}}>
            <h1>Header</h1>
        </header>
        <main >
        {children}

        </main>
        <footer style={{  border: '1px solid green',padding: '2px'}}>
            <h1>Footer</h1>
        </footer>
        </body>
    </html>
  )
}
