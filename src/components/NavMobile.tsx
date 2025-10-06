import { useState } from "react";

export function NavMobile() {
  const [nav, setNav] = useState(false);
  return (
    <header className='flex md:hidden w-full'>
      <div
        onClick={() => setNav(!nav)}
        className='w-12 h-12 bg-blue-400 absolute top-5 right-5'
      ></div>

      {nav && (
        <nav className='flex z-10 absolute top-0 left-0 w-full'>
          <ul className='flex flex-col h-[100vh] w-[60%] bg-amber-500'>
            <li>Home</li>
            <li>Menu</li>
          </ul>
          <div className='w-[40%] bg-amber-950'></div>
        </nav>
      )}
    </header>
  );
}
