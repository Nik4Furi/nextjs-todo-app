import Header from '@/components/server/Header'
import {Toaster} from 'react-hot-toast'

import '../styles/globals.css'
import State from '@/components/clients/State'

export const metadata = {
  title: 'nextjs-todo-app',
  description: 'Create the app using NextJS',
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
