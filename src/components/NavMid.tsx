export function NavMid() {
  const liStyle =
    "hover:bg-emerald-900 hover:text-emerald-200 px-4 py-1 rounded cursor-pointer transition";
  return (
    <header className='hidden md:flex shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)]'>
      <ul className='flex gap-8 p-4 w-full justify-center text-xl italic font-medium text-emerald-80000 text-center'>
        <li className={liStyle}>HOME</li>
        <li className={liStyle}>CERIMÔNIA</li>
        <li className={liStyle}>LISTA DE PRESENTES</li>
        <li className={liStyle}>CONFIRME SUA PRESENÇA</li>
      </ul>
    </header>
  );
}
