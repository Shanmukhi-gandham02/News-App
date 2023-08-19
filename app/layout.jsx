import './globals.css'

import Nav from '@components/Nav'

import { AuthContextProvider } from '@context/AuthContext'
import { NewsProvider } from '@context/NewsContext'

export const metadata = {
  title: 'News App',
  description: 'Show News Articles',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <div className="main">
          <div className="gradient" />
      </div>

      <AuthContextProvider>

      <NewsProvider>  
      <main className="app"> 
          <Nav />
          {children}    
      </main>
      </NewsProvider>
      
      </AuthContextProvider>
      
      </body>
    </html>
  )
}

