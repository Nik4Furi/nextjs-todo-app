import Header from '@/components/server/Header'
import { Toaster } from 'react-hot-toast';

import '../styles/globals.css'
import State from '@/components/clients/State'

export const metadata = {
  title:"NextJS-Todo-app",
  description:"NThat was a nextjs-todo app"
}



export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <body>

        <State>
          <>

            {/* Header Component  */}
            <Header />

            {children}

            <Toaster />

          </>

        </State>
      </body>
    </html>
  )
}
