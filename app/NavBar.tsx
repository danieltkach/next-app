import Link from 'next/link';
import React from 'react';

const NavBar =()=> {
  return(
    <div className="flex p-5 bg-yellow-400">
      <Link href="/">Home</Link>
      <Link href="/users">Users</Link>
    </div>
  )
}

export default NavBar;