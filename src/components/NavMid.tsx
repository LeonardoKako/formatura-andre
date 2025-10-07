export function NavMid() {
  const liStyle =
    "hover:bg-slate-700 hover:text-slate-300 px-4 py-1 rounded cursor-pointer";
  return (
    <header className='hidden md:flex shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)]'>
      <ul className='flex gap-8 p-4 w-full justify-center text-xl italic font-medium text-slate-700'>
        <li className={liStyle}>Home</li>
        <li className={liStyle}>Cerimônia</li>
        <li className={liStyle}>Confirme sua presença</li>
      </ul>
    </header>
  );
}
