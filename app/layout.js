//import '@styles/globals.css';
//import { Inter } from "next/font/google";
import "../styles/globals.css"; //it works

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
    <body>
      <div className="main">
        <div className="gradient"/>
      </div>

      <main className="app">
        {children}
      </main>
    </body>
  </html>

  )
};

export default RootLayout

