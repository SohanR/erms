import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="bg-gray-800">
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <Link to='/' className="text-white font-bold text-xl">Home </Link>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <Link to="/teacher/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Log in</Link>
            <Link to="/teacher/registration" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Nav