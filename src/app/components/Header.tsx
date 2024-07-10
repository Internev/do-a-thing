'use client'

import React from 'react'
import { signOut } from 'next-auth/react'

const Header: React.FC = () => {
  return (
    <header className="flex flex-row h-7 justify-between border-b-2">
      <nav className="ml-auto min-w-24">
        <ul className="flex flex-row justify-between ml-auto">
          <li>
            <button onClick={() => signOut()}>Sign Out</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
