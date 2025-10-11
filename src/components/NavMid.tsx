export function NavMid() {
  const liStyle =
    "hover:bg-emerald-900 hover:text-emerald-200 px-4 py-1 rounded cursor-pointer transition";

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className='hidden md:flex fixed top-0 left-0 w-full bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] z-50'>
      <ul className='flex gap-8 p-4 w-full justify-center text-xl italic font-medium text-emerald-800 text-center'>
        <li className={liStyle} onClick={() => scrollToSection("home")}>
          HOME
        </li>
        <li className={liStyle} onClick={() => scrollToSection("cerimonia")}>
          CERIMÔNIA
        </li>
        <li className={liStyle} onClick={() => scrollToSection("lista")}>
          LISTA DE PRESENTES
        </li>
        <li className={liStyle} onClick={() => scrollToSection("confirmacao")}>
          CONFIRME SUA PRESENÇA
        </li>
      </ul>
    </header>
  );
}
