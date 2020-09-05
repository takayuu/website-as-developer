import React from 'react'
import TheHeader from '../organisms/TheHeader'
import TheFooter from '../organisms/TheFooter'

type Props = {
  home?: boolean
}

const Layout: React.FC<Props> = ({ children, home }) => {
  return (
    <div className="flex flex-col h-screen">
      <TheHeader />
      <main className="flex-grow">
        <div className="mx-auto px-12 pt-12 pb-20 container">{children}</div>
      </main>
      <TheFooter />
    </div>
  )
}

export default Layout
